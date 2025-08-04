const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log("Incoming data:", req.body);
    const { name, email, password, role } = req.body; // ✅ Include role
if (!name || !email || !password ) {
      return res.status(400).send("All fields are required");
    }
    if (!role || !['jobseeker', 'recruiter'].includes(role)) {
      return res.status(400).send("Role must be either 'jobseeker' or 'recruiter'");
    }

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role, // ✅ Now it's defined
    });

    await newUser.save();
    console.log("User saved successfully");
    res.status(201).send("User created");
  } catch (err) {
    console.error("Registration Error:", err.message);
    res.status(500).send("Server error: " + err.message);
  }
};

// ✅ Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const matchedObj = await User.findOne({ email });
    if (!matchedObj) {
      return res.status(401).send("Invalid credentials");
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, matchedObj.password);
    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }

    // 3. Generate JWT (exclude password for security)
    const token = jwt.sign(
      { id: matchedObj._id, role: matchedObj.role, email: matchedObj.email },
      "pavani123", // 👈 Use env variable in real apps
      { expiresIn: "1d" }
    );

    // 4. Return token & role
    res.json({
      matchedObj: {
        name: matchedObj.name,
        email: matchedObj.email,
        role: matchedObj.role,
      },
      token,
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).send("Server error: " + err.message);
  }
};

module.exports = {register, login}