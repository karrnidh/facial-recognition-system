import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const PunchIn = () => {
    const webcamRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    // Capture Image and Send to Backend
    const captureAndPunchIn = async () => {
        const imageSrc = webcamRef.current.getScreenshot();

        try {
            const response = await axios.post("http://localhost:5000/punchin", {
                image: imageSrc,
            });

            if (response.data.success) {
                setShowModal(true); // Show success popup
            } else {
                alert("Punch-in failed! Face not recognized.");
            }
        } catch (error) {
            console.error("Error punching in:", error);
            alert("Server error! Please try again.");
        }
    };

    // Auto-capture and Punch-in when page loads
    useEffect(() => {
        setTimeout(captureAndPunchIn, 2000); // Delay for camera to load
    }, []);

    return (
        <div className="container text-center mt-5">
            <h2>Employee Punch-In</h2>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
                className="border rounded shadow"
            />

            {/* Punch-in Success Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">
                    <h4>Punch-In Successful ✅</h4>
                    <Button variant="success" onClick={() => setShowModal(false)}>
                        OK
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PunchIn;
