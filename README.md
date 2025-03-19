# Employee Management System (EMS)

## 📌 Overview
The **Employee Management System (EMS)** is a full-stack web application that allows an organization to efficiently manage employee records, including adding, updating, deleting, and viewing employee details. It is built using **Next.js**, **Tailwind CSS**, **Java Spring Boot**, and **MySQL**.

## 🛠 Technologies Used
### Frontend:
- Next.js
- Tailwind CSS
- React Toastify (for success messages)

### Backend:
- Java Spring Boot
- JPA (Java Persistence API)
- MySQL Database
- Email Service (for notifications and authentication)

### Authentication & Security:
- Email & OTP Verification (Java Spring Boot)

## 🚀 Features
✅ **Admin Panel** - Manage employees efficiently with an intuitive dashboard.  
✅ **User Authentication** - Secure login & registration with email verification.  
✅ **Employee Management** - Add, update, delete, and view employees.  
✅ **Graphical Reports** - View employee statistics using charts.  
✅ **Responsive UI** - Fully optimized for mobile and desktop.  
✅ **React Toastify** - Display success messages upon actions.  
✅ **Email Service** - Send notifications and verification emails.  

## 📥 Installation & Setup
### 1️⃣ Backend Setup (Spring Boot & MySQL)
1. Open the backend folder in an IDE (IntelliJ/VS Code/Eclipse).
2. Configure **application.properties** with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ems_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
3. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### 2️⃣ Frontend Setup (Next.js & Tailwind CSS)
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Next.js development server:
   ```sh
   npm run dev
   ```

## 📌 API Endpoints
| Endpoint                 | Method | Description                    |
|--------------------------|--------|--------------------------------|
| `/api/register`          | POST   | Register a new user           |
| `/api/login`             | POST   | Authenticate user login       |
| `/api/employees`         | GET    | Get all employees             |
| `/api/employees/{id}`    | GET    | Get a single employee         |
| `/api/employees`         | POST   | Add a new employee            |
| `/api/employees/{id}`    | PUT    | Update employee details       |
| `/api/employees/{id}`    | DELETE | Remove an employee            |
| `/api/email/send`        | POST   | Send an email notification    |

## 💡 Contributing
Feel free to contribute! Fork the repository, create a new branch, and submit a pull request.

## 📞 Contact
For any queries, contact **[Rushi Lahane](https://github.com/Rushi-Lahane)**.

---
🚀 Happy Coding! 🎯

