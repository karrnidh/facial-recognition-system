import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.heroContainer}>
      {/* Animated Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.heading}
      >
        Welcome to <span style={styles.highlight}>FaceSecure</span>
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={styles.subtext}
      >
        Secure Employee Entry with Advanced AI Facial Recognition.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.3 }}
        style={styles.buttonContainer}
      >
        <button style={styles.primaryButton}>Register</button>
        <button 
          style={styles.secondaryButton} 
          onClick={() => navigate("/login")} // ⬅️ Navigates to Login.js
        >
          Log In
        </button>
      </motion.div>
    </div>
  );
};

// Inline Styling
const styles = {
  heroContainer: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #3182ce, #1e3a5f)", // New gradient
    color: "#fff",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  highlight: {
    color: "#ffdd57", // Gold highlight
  },
  subtext: {
    fontSize: "1.3rem",
    opacity: 0.9,
    marginBottom: "25px",
  },
  buttonContainer: {
    display: "flex",
    gap: "15px",
  },
  primaryButton: {
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#fff",
    transition: "background 0.3s ease-in-out",
  },
  secondaryButton: {
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "2px solid #fff",
    cursor: "pointer",
    borderRadius: "8px",
    background: "transparent",
    color: "#fff",
    transition: "all 0.3s ease-in-out",
  },
};

// Button Hover Effects (Applied via JavaScript, since inline styles don't support pseudo-classes)
styles.primaryButton["hover"] = {
  background: "#1d4ed8",
};

styles.secondaryButton["hover"] = {
  background: "#fff",
  color: "#1e3a5f",
};

export default Home;
