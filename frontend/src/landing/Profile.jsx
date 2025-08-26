import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const loggedInEmail = localStorage.getItem("userEmail");

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
    <>
    
    <div style={styles.pageBackground}>
      <div style={styles.container}>
      <h2 style={styles.header}>{savedData ? "Your Profile" : "Profile Settings"}</h2>
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.imageContainer}>
        {photoPreview ? (
          <img src={photoPreview} alt="Profile" style={styles.image} />
        ) : (
          <div style={styles.avatar}>👤</div>
        )}
        <br />
        <button onClick={triggerFileInput} style={styles.uploadButton}>
          Update Profile Photo
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleChange}
          name="photo"
        />
      </div>

      {!savedData || isEditingDetails ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="firstName"
            placeholder="First Name"
            value={profileData.firstName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="surname"
            placeholder="Surname"
            value={profileData.surname}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={profileData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="address1"
            placeholder="Address1"
            value={profileData.address1}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="address2"
            placeholder="Address2"
            value={profileData.address2}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="postcode"
            placeholder="Postcode"
            value={profileData.postcode}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="state"
            placeholder="State"
            value={profileData.state}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="area"
            placeholder="Area"
            value={profileData.area}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="email"
            placeholder="Email"
            value={profileData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="education"
            placeholder="Education"
            value={profileData.education}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="country"
            placeholder="Country"
            value={profileData.country}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="region"
            placeholder="Region"
            value={profileData.region}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="experience"
            placeholder="Experience"
            value={profileData.experience}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="additional"
            placeholder="Additional Details"
            value={profileData.additional}
            onChange={handleChange}
            rows={3}
            style={styles.textarea}
          />
          <button type="submit" style={styles.submitButton}>Save Profile</button>
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
          <button onClick={() => setIsEditingDetails(true)} style={styles.submitButton}>
            Update Details
          </button>
        </div>
      )}
      </div>
    </div>
    </>
    
  );
};

const styles = {
  pageBackground: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    backdropFilter: "blur(10px)",
    color: "white",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
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
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    marginBottom: "10px",
  },
  uploadButton: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "14px",
  },
  input: {
    padding: "12px 15px",
    border: "none",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.9)",
    fontSize: "14px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  textarea: {
    padding: "12px 15px",
    border: "none",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.9)",
    fontSize: "14px",
    transition: "all 0.3s ease",
    resize: "vertical",
    minHeight: "80px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  error: {
    color: "#ff6b6b",
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  },
  submitButton: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Profile;
