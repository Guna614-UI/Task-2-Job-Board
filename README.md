# 📄 GrowthLink Internship — Task 2: Job Board
🚀 Task Objective
Develop a Job Board platform where:

Employers can register, login, post jobs, and view jobs they posted.

Job Seekers can register, login, browse jobs, apply to jobs, and view job details.

Admin (future scope) can manage jobs and users.

Basic authentication using JWT token.

MongoDB Atlas (cloud database) for storing users, jobs, and applications.

# 🛠 Tech Stack

# Frontend,	Backend, 	Database, Testing
HTML, CSS, JavaScript (Vanilla)	Node.js, Express.js	MongoDB Atlas (Cloud), Postman API
# 📁 Project Structure
job-portal-frontend/
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── jobs.js
│   │   ├── postJob.js
│   │   ├── apply.js
│   │   └── utils.js
│   └── images/
│
├── employer/
│   ├── register.html
│   ├── login.html
│   └── dashboard.html
│
├── seeker/
│   ├── register.html
│   ├── login.html
│   ├── jobs.html
│   ├── job-details.html
│   └── apply.html
│
├── shared/
│   └── navbar.html
│
└── index.html
Backend is inside backend/ folder with proper Node.js project setup.

# ⚙️ How to Run this Project
Backend (Server Setup)

Go to backend folder:
cd backend

Install dependencies:
npm install

Setup .env file inside backend/:
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key

Start the backend server:
npm run dev

You should see:
Server running on port 5000
MongoDB connected
Frontend (Live Server)
Go to job-portal-frontend/ folder.

Open index.html in Live Server (VS Code extension).

# Now you can use the full frontend:

Employers can register, login, and post jobs.

Job Seekers can register, login, browse, view, and apply to jobs.

The frontend will connect to the backend API (http://localhost:5000).

# ✅ Testing Checklist

# Feature	Status
Employer Registration & Login	✅
Employer Post Job	✅
Job Seeker Registration & Login	✅
Browse Jobs	✅
View Job Details	✅
Apply to Jobs	✅
Token Authentication (JWT)	✅
MongoDB Atlas Integration	✅
Frontend & Backend Integration	✅
Postman API Testing	✅

# 📥 How to Clone and Run This Project
Open your terminal and clone the repository:
git clone https://github.com/your-username/job-board.git
cd job-board
Navigate to the backend:
cd backend
Install backend dependencies:
npm install
Create a .env file inside backend/ and add the following:
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
Start the backend server:
npm run dev
You should see:
Server running on port 5000
MongoDB connected
Navigate back to the frontend:

Open the index.html using Live Server (VS Code extension) or any static server.

# 💬 Notes
Frontend uses Vanilla JS fetch() for API requests.

Token is stored in LocalStorage after login.

Code is well-structured, commented, and modular.

Backend uses Express middleware to protect private routes.


# 🏆 Completion Status
# ✅ Task completed successfully as per the objectives.

# 🔗 Author
K Guna Surya Kumar

# LinkedIn Profile
www.linkedin.com/in/guna-surya-kumar-katakam-0b4358275
