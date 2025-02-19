import React, { useState } from "react";
import { motion } from "framer-motion";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleFaceIDLogin = () => {
    // Simulate Face ID authentication
    setTimeout(() => {
      setAuthenticated(true);
    }, 2000); // Simulated delay for face scan
  };

  return (
    <div style={styles.container}>
      {!authenticated ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.loginBox}
        >
          <h2 style={styles.heading}>Admin Face ID Login</h2>
          <p style={styles.subtext}>Scan your face to access logs.</p>
          <motion.button
            onClick={handleFaceIDLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.loginButton}
          >
            Authenticate with Face ID
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.logsContainer}
        >
          <h2 style={styles.heading}>Employee Punch-in Logs</h2>
          <div style={styles.logBox}>
            <p><strong>John Doe</strong> - Punch In: 9:00 AM</p>
            <p><strong>Jane Smith</strong> - Punch In: 9:15 AM</p>
            <p><strong>Mike Johnson</strong> - Punch In: 9:30 AM</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// **Inline Styles**
const styles = {
  container: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #3182ce, #1e3a5f)", // Matches existing theme
    color: "#fff",
  },
  loginBox: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
  },
  logsContainer: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    width: "60%",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  subtext: {
    fontSize: "1.2rem",
    opacity: 0.9,
    marginBottom: "20px",
  },
  loginButton: {
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
  logBox: {
    background: "rgba(255, 255, 255, 0.2)",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "left",
  },
};

// Hover Effect
styles.loginButton[":hover"] = {
  background: "#1d4ed8",
};

export default Admin;
