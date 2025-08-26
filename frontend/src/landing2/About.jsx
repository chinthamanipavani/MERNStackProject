import React from "react";

const aboutStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
  },
  hero: {
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.2rem",
    fontWeight: 300,
  },
  content: {
    width: "100%",
    maxWidth: "900px",
    textAlign: "left",
    color: "#333",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    color: "#1e3c72",
    marginBottom: "10px",
    fontSize: "1.6rem",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
  },
  listItem: {
    padding: "6px 0",
    fontSize: "1.05rem",
  },
};

const About = () => {
  return (
    <div id="about" style={aboutStyles.container}>
      <div style={aboutStyles.hero}>
        <h1 style={aboutStyles.heading}>About Find Your Job</h1>
        <p style={aboutStyles.subheading}>Your Career Starts Here </p>
      </div>

      <div style={aboutStyles.content}>
        {[
          {
            title: "Our Mission",
            content:
              "At Find Your Job, we are committed to bridging the gap between talented job seekers and exceptional employers. Our mission is to simplify the job search process with a user-friendly platform that helps you find opportunities aligned with your skills and passion.",
          },
          {
            title: "💼 What We Offer",
            content: (
              <ul style={aboutStyles.list}>
                <li style={aboutStyles.listItem}>🔍 Personalized job recommendations</li>
                <li style={aboutStyles.listItem}>🌐 Location and skill-based filters</li>
                <li style={aboutStyles.listItem}>📄 Resume uploads and profile creation</li>
                <li style={aboutStyles.listItem}>🧑‍💼 Recruiter and company dashboards</li>
                <li style={aboutStyles.listItem}>🔔 Real-time notifications and updates</li>
              </ul>
            ),
          },
          {
            title: "Why Choose Us?",
            content:
              "We’re not just another job board. We focus on creating a smooth and efficient hiring experience. Whether you're a fresher looking for your first role or a seasoned professional ready for your next challenge, Find Your Job is your trusted partner in career development.",
          },
          {
            title: "Get Started Today!",
            content:
              "Create your profile, explore opportunities, and take the next step in your career journey. The perfect job is just a few clicks away.",
          },
        ].map((section, index) => (
          <section key={index} style={aboutStyles.section}>
            <h2 style={aboutStyles.sectionTitle}>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default About;
