import sqlite3

# Connect to SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect("employee_database.db")
cursor = conn.cursor()

# Create table for storing employee details
cursor.execute("""
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    face_encoding BLOB NOT NULL
)
""")

# Save changes and close connection
conn.commit()
conn.close()

print("Database and table created successfully!")