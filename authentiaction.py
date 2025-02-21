import firebase_admin
from firebase_admin import credentials, firestore
import face_recognition
import numpy as np
import cv2
from datetime import datetime

# ✅ Step 1: Initialize Firebase
cred = credentials.Certificate("/Users/maulikbhardwaj/facrek/facial-recognition-sys.json")  # Your Firebase key
firebase_admin.initialize_app(cred)
db = firestore.client()

def load_registered_faces():
    """Load all registered employee face encodings from Firebase."""
    known_faces = []
    employee_ids = []

    employees = db.collection("employees").stream()
    for emp in employees:
        data = emp.to_dict()
        known_faces.append(np.array(data["face_encoding"]))  # Convert list back to numpy array
        employee_ids.append(data["employee_id"])

    return known_faces, employee_ids

def recognize_employee():
    """Capture an image and authenticate the employee using facial recognition."""
    known_faces, employee_ids = load_registered_faces()

    # Open webcam
    cap = cv2.VideoCapture(0)
    print("🔍 Looking for a registered face...")

    while True:
        ret, frame = cap.read()
        if not ret:
            continue
        
        # Convert frame to RGB
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Detect face in the frame
        face_locations = face_recognition.face_locations(rgb_frame)
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

        for encoding in face_encodings:
            matches = face_recognition.compare_faces(known_faces, encoding)
            face_distances = face_recognition.face_distance(known_faces, encoding)
            best_match_index = np.argmin(face_distances)  # Find the best match

            if matches[best_match_index]:
                employee_id = employee_ids[best_match_index]

                print(f"✅ Employee Recognized: {employee_id}")
                log_entry(employee_id)
                cap.release()
                cv2.destroyAllWindows()
                return employee_id

        cv2.putText(frame, "Face Not Recognized!", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.imshow("Facial Recognition Login", frame)

        # Exit if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    print("❌ Authentication Failed. No match found.")
    return None

def log_entry(employee_id):
    """Log the employee's entry time in Firebase."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    db.collection("entry_logs").add({
        "employee_id": employee_id,
        "timestamp": timestamp
    })
    print(f"📝 Entry logged for {employee_id} at {timestamp}")

if __name__ == "__main__":
    recognize_employee()
