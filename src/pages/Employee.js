import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { motion } from "framer-motion";

const Employee = () => {
    const [capturedImage, setCapturedImage] = useState(null);
    const [statusMessage, setStatusMessage] = useState("");
    const webcamRef = useRef(null);
    const navigate = useNavigate();

    // 🎥 Capture image from webcam
    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
        sendImageToServer(imageSrc);
    };

    // 📡 Send captured image to Flask backend for facial recognition
    const sendImageToServer = async (image) => {
        setStatusMessage("🔍 Scanning face...");

        try {
            const response = await fetch("http://127.0.0.1:5000/recognize_employee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ image }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatusMessage(`✅ Welcome, ${data.employee_id}!`);
            } else {
                setStatusMessage("❌ Face Not Recognized. Try Again.");
            }
        } catch (error) {
            setStatusMessage("⚠️ Error connecting to server.");
        }
    };

    return (
        <div style={styles.container}>
            {/* Animated Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={styles.heading}
            >
                Employee <span style={styles.highlight}>Punch In</span>
            </motion.h1>

            {/* Webcam Feed */}
            <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={styles.webcam}
            />

            {/* Capture Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={capture}
                style={styles.primaryButton}
            >
                Scan Face
            </motion.button>

            {/* Status Message */}
            {statusMessage && <p style={styles.status}>{statusMessage}</p>}

            {/* Captured Image Preview */}
            {capturedImage && <img src={capturedImage} alt="Captured" style={styles.imagePreview} />}

            {/* Back Button */}
            <button onClick={() => navigate("/")} style={styles.secondaryButton}>
                Back
            </button>
        </div>
    );
};

// 🔹 Styles (Matches FaceSecure Palette)
const styles = {
    container: {
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #3182ce, #1e3a5f)",
        color: "#fff",
    },
    heading: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    highlight: {
        color: "#ffdd57",
    },
    webcam: {
        width: "320px",
        height: "240px",
        borderRadius: "8px",
        marginBottom: "15px",
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
        marginBottom: "10px",
        transition: "background 0.3s ease-in-out",
    },
    secondaryButton: {
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "2px solid #fff",
        cursor: "pointer",
        borderRadius: "8px",
        background: "transparent",
        color: "#fff",
        transition: "all 0.3s ease-in-out",
    },
    status: {
        marginTop: "10px",
        fontSize: "18px",
        fontWeight: "bold",
    },
    imagePreview: {
        width: "200px",
        borderRadius: "8px",
        marginTop: "15px",
        border: "2px solid #ffdd57",
    },
};

// Button Hover Effects
styles.primaryButton[":hover"] = { background: "#1d4ed8" };
styles.secondaryButton[":hover"] = { background: "#fff", color: "#1e3a5f" };

export default Employee;
