## **🎅 Secret Santa Assignment 🎁**  
_Automated Secret Santa pairing with XLSX file handling & Jest unit tests._

### **📌 Overview**  
This project automates the **Secret Santa** assignment process. It ensures:  
✅ No self-assignment.  
✅ No repeated assignments from the previous year.  
✅ Every employee is assigned exactly one secret child.  
✅ Outputs an Excel file with assignments.  

---

## **📁 Project Structure**  
```
/secret-santa
│── /data
│   ├── employees.xlsx        # Current employee list
│   ├── last_year.xlsx        # Last year's assignments
│── /src
│   ├── assignSanta.js        # Secret Santa logic
│   ├── fileHandler.js        # XLSX read/write operations
│   ├── utils.js              # Helper functions (shuffle, validation)
│── /tests
│   ├── assignSanta.test.js   # Unit tests for Secret Santa logic
│   ├── fileHandler.test.js   # Unit tests for file handling
│── index.js                  # Main entry point
│── package.json
│── README.md

```

---

## **⚙️ Installation**  
### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/07-Mayankraj/Secret_Santa
cd Secret_Santa
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

---

## **📥 Input Format (XLSX Files)**
### **1️⃣ `employees.xlsx` (Current Employees)**
| Employee_Name | Employee_EmailID         |
|--------------|-------------------------|
| Alice        | alice@example.com        |
| Bob          | bob@example.com          |
| Charlie      | charlie@example.com      |

### **2️⃣ `last_year.xlsx` (Last Year’s Assignments)**
| Employee_Name | Employee_EmailID         | Secret_Child_Name | Secret_Child_EmailID |
|--------------|-------------------------|-------------------|----------------------|
| Alice        | alice@example.com        | Bob              | bob@example.com      |
| Bob          | bob@example.com          | Charlie          | charlie@example.com  |

---

## **🚀 Running the Program**  
```sh
node index.js
```
✅ Generates `secret_santa_output.xlsx` with assignments.

---

## **📤 Output Format (`secret_santa_output.xlsx`)**
| Employee_Name | Employee_EmailID         | Secret_Child_Name | Secret_Child_EmailID |
|--------------|-------------------------|-------------------|----------------------|
| Alice        | alice@example.com        | Charlie          | charlie@example.com  |
| Bob          | bob@example.com          | Alice            | alice@example.com    |

---

## **🛠️ Running Tests**  
To run **unit tests**, use:
```sh
npm test
```

### **🔬 Tests Included**
✅ **assignSanta.test.js** – Ensures proper Secret Santa assignment.  
✅ **fileHandler.test.js** – Validates XLSX read/write operations.  

---

## **📌 Features Implemented**
- ✅ Randomized Secret Santa assignment.
- ✅ No self-assignment.
- ✅ No repetition from the previous year.
- ✅ Modular, scalable, and extensible.
- ✅ Error handling for file operations.
- ✅ Jest unit tests for correctness.

---

## **📌 Future Enhancements**
🔹 **Email Notifications** – Send Secret Santa emails.  
🔹 **Web UI** – Interactive web interface for assignments.  
🔹 **Database Support** – Store & retrieve assignments from a DB.  

---

This README is **comprehensive and beginner-friendly**! 🎯  
Would you like to include **GIFs or screenshots** for clarity? 🚀