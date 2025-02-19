import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.heading}
      >
        Choose Your Role
      </motion.h2>

      {/* Animated Buttons for Employee & Admin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={styles.buttonContainer}
      >
        <button
          style={styles.employeeButton}
          onClick={() => navigate("/employee")}
        >
          Employee
        </button>
        <button
          style={styles.adminButton}
          onClick={() => navigate("/admin")}
        >
          Admin
        </button>
      </motion.div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={styles.backButton}
        onClick={() => navigate("/")}
      >
        ⬅ Back to Home
      </motion.button>
    </div>
  );
};

// Inline Styling
const styles = {
  container: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #3182ce, #1e3a5f)", // Matching Home.js
    color: "#fff",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffdd57", // Gold highlight
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },
  employeeButton: {
    padding: "14px 28px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#fff",
    transition: "background 0.3s ease-in-out",
  },
  adminButton: {
    padding: "14px 28px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "2px solid #fff",
    cursor: "pointer",
    borderRadius: "8px",
    background: "transparent",
    color: "#fff",
    transition: "all 0.3s ease-in-out",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    background: "#ffdd57",
    color: "#1e3a5f",
    transition: "background 0.3s ease-in-out",
  },
};

// Hover Effects
styles.employeeButton[":hover"] = {
  background: "#1d4ed8",
};
styles.adminButton[":hover"] = {
  background: "#fff",
  color: "#1e3a5f",
};
styles.backButton[":hover"] = {
  background: "#e6c300",
};

export default Login;
