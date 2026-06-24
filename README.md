NIN Authentication System

A full-stack authentication application that allows users to register and log in using only their National Identification Number (NIN) and password. During registration, the application retrieves the user’s personal information from a simulated NIN verification service and stores it securely in MongoDB. Authenticated users can then view their profile through a protected route.
Note: This project uses a mock NIN service for demonstration purposes because official NIN data is not publicly accessible.
 
⸻
 
Features
	•	Register with NIN and password
	•	Automatic retrieval of user details from a mock NIN service
	•	Secure password hashing using bcrypt
	•	JWT-based authentication
	•	Protected profile route
	•	MongoDB database integration
	•	Responsive React frontend
	•	RESTful API built with Express.js
 
⸻
 
Tech Stack
Frontend
	•	React
	•	React Router
	•	Axios
	•	Tailwind CSS
Backend
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	JWT (JSON Web Token)
	•	bcrypt
	•	dotenv
	•	CORS
 
⸻
 
Project Structure
nin-auth-system/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── server/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── app.js
    └── package.json
 
⸻
 
Installation
Clone the repository
git clone https://github.com/yourusername/nin-auth-system.git
Navigate to the project
cd nin-auth-system
Install frontend dependencies
cd client
npm install
Install backend dependencies
cd ../server
npm install
 
⸻
 
Environment Variables
Create a .env file inside the server folder.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
 
⸻
 
Running the Application
Start the backend
cd server
npm run dev
Start the frontend
cd client
npm run dev
Open your browser and visit:
http://localhost:5173
 
⸻
 
Authentication Flow
	1.	User enters a NIN and password.
	2.	The backend checks whether the NIN exists in the mock NIN service.
	3.	User information is retrieved automatically.
	4.	The password is securely hashed using bcrypt.
	5.	User data is stored in MongoDB.
	6.	User logs in with NIN and password.
	7.	A JWT is generated upon successful authentication.
	8.	The JWT is used to access the protected profile route.
	9.	The authenticated user’s profile is displayed.
 
⸻
 
API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Authenticate a user
GET	/api/auth/profile	Retrieve authenticated user’s profile
 
⸻
 
Future Improvements
	•	Integration with an official NIN verification API
	•	Password visibility toggle
	•	Toast notifications
	•	Dark mode
	•	Protected frontend routes
	•	Form validation
	•	Profile editing
	•	Refresh token authentication
	•	Unit and integration tests
	•	Docker support
	•	Deployment with Vercel and Render
 
⸻
 
Author
Gabriel Divinefavour
Built as part of a full-stack web development portfolio to demonstrate authentication, API integration, secure password handling, and modern React development practices.
