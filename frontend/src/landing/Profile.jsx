import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const loggedInEmail = localStorage.getItem("currentUserEmail");

  const [profileData, setProfileData] = useState({
    firstName: "",
    surname: "",
    phone: "",
    address1: "",
    address2: "",
    postcode: "",
    state: "",
    area: "",
    email: "",
    education: "",
    country: "",
    region: "",
    experience: "",
    additional: "",
    photo: null,
  });

  const [savedData, setSavedData] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState("");
  const [isEditingDetails, setIsEditingDetails] = useState(false);

  useEffect(() => {
    if (!loggedInEmail) {
      alert("Please log in to access your profile.");
      navigate("/login");
      return;
    }

    const savedProfile = localStorage.getItem(`profile_${loggedInEmail}`);
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfileData(parsed);
      setSavedData(parsed);
      setPhotoPreview(parsed.photo || null);
    }
  }, [loggedInEmail, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoPreview(reader.result);
          setProfileData((prev) => ({ ...prev, photo: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setProfileData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (profileData.email.trim() !== loggedInEmail) {
      setError("Please enter the login email only.");
      return;
    }

    localStorage.setItem(
      `profile_${loggedInEmail}`,
      JSON.stringify(profileData)
    );

    setSavedData(profileData);
    setIsEditingDetails(false);
    setError("");
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={styles.container}>
      <h2>{savedData ? "Your Profile" : "Profile Settings"}</h2>
      {error && <p style={styles.error}>{error}</p>}

      {photoPreview ? (
        <img src={photoPreview} alt="Profile" style={styles.image} />
      ) : (
        <div style={styles.avatar}>👤</div>
      )}
      <br />
      <button onClick={triggerFileInput}>Update Profile Photo</button>
      <br />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleChange}
        name="photo"
      />

      {!savedData || isEditingDetails ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="firstName"
            placeholder="First Name"
            value={profileData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="surname"
            placeholder="Surname"
            value={profileData.surname}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone"
            value={profileData.phone}
            onChange={handleChange}
            required
          />
          <input
            name="address1"
            placeholder="Address1"
            value={profileData.address1}
            onChange={handleChange}
            required
          />
          <input
            name="address2"
            placeholder="Address2"
            value={profileData.address2}
            onChange={handleChange}
            required
          />
          <input
            name="postcode"
            placeholder="Postcode"
            value={profileData.postcode}
            onChange={handleChange}
            required
          />
          <input
            name="state"
            placeholder="State"
            value={profileData.state}
            onChange={handleChange}
            required
          />
          <input
            name="area"
            placeholder="Area"
            value={profileData.area}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={profileData.email}
            onChange={handleChange}
            required
          />
          <input
            name="education"
            placeholder="Education"
            value={profileData.education}
            onChange={handleChange}
            required
          />
          <input
            name="country"
            placeholder="Country"
            value={profileData.country}
            onChange={handleChange}
            required
          />
          <input
            name="region"
            placeholder="Region"
            value={profileData.region}
            onChange={handleChange}
            required
          />
          <input
            name="experience"
            placeholder="Experience"
            value={profileData.experience}
            onChange={handleChange}
            required
          />
          <textarea
            name="additional"
            placeholder="Additional Details"
            value={profileData.additional}
            onChange={handleChange}
            rows={3}
          />
          <button type="submit">Save Profile</button>
        </form>
      ) : (
        <div>
          <br />
          <p>
            <strong>Name:</strong> {savedData.firstName} {savedData.surname}
          </p>
          <p>
            <strong>Email:</strong> {savedData.email}
          </p>
          <p>
            <strong>Phone:</strong> {savedData.phone}
          </p>
          <p>
            <strong>Address:</strong> {savedData.address1}, {savedData.address2}
            , {savedData.postcode}, {savedData.state}, {savedData.area}
          </p>
          <p>
            <strong>Education:</strong> {savedData.education}
          </p>
          <p>
            <strong>Country:</strong> {savedData.country}
          </p>
          <p>
            <strong>Region:</strong> {savedData.region}
          </p>
          <p>
            <strong>Experience:</strong> {savedData.experience}
          </p>
          <p>
            <strong>Additional:</strong> {savedData.additional}
          </p>
          <button onClick={() => setIsEditingDetails(true)}>
            Update Details
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  inputFile: {
    marginBottom: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    marginBottom: "10px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default Profile;
