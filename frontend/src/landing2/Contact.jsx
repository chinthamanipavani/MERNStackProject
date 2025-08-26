import React from "react";

const Contact = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
      padding: "50px 20px",
      fontFamily: "Segoe UI, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      fontSize: "2.8rem",
      color: "#0d47a1",
      marginBottom: "10px",
    },
    subHeader: {
      fontSize: "1.1rem",
      textAlign: "center",
      color: "#555",
      maxWidth: "700px",
      marginBottom: "40px",
    },
    contentBox: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "900px",
      width: "100%",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "40px",
      gap: "30px",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      fontSize: "1rem",
      color: "#333",
    },
    label: {
      fontWeight: "bold",
      color: "#222",
      marginBottom: "5px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
      transition: "border-color 0.3s, box-shadow 0.3s",
    },
    textarea: {
      width: "100%",
      padding: "14px 16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
      resize: "vertical",
      minHeight: "120px",
      transition: "border-color 0.3s, box-shadow 0.3s",
    },
    button: {
      backgroundColor: "#0d47a1",
      color: "#fff",
      padding: "12px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "fit-content",
      alignSelf: "flex-end",
    },
    infoItem: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    icon: {
      fontSize: "1.2rem",
      color: "#0d47a1",
    },
  };

  return (
    <div id="contact" style={styles.container}>
      <h1 style={styles.header}>Contact</h1>
      <p style={styles.subHeader}>
        We'd love to hear from you! Whether you have a question, feedback, or
        just want to say hello — our team is ready to connect with you.
      </p>

      <div style={styles.contentBox}>
        <div style={styles.contactInfo}>
          <div style={styles.infoItem}>
            <span style={styles.icon}>📍</span>
            <span>123, Tech Avenue, Hyderabad, India</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>✉️</span>
            <span>support@jobportal.com</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>🕒</span>
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <form style={styles.form}>
          <div>
            <label style={styles.label}>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>Message</label>
            <textarea
              placeholder="Type your message here"
              style={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
