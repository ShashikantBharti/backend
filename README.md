# User Management API with JWT Authentication and Cloudinary Integration

This project is a user management system that implements JWT-based authentication (access and refresh tokens), and user-related functionalities such as registration, login, logout, updating user profile details, changing the current password, and uploading avatars and cover images to Cloudinary.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run Locally](#run-locally)
- [API Endpoints](#api-endpoints)
  - [Auth Routes](#auth-routes)
  - [User Routes](#user-routes)
  - [File Upload](#file-upload)
- [Error Handling](#error-handling)
- [Utils](#utils)
- [Contributing](#contributing)
- [License](#license)

## Features

- **JWT Authentication**: Access and refresh tokens for secure API authentication.
- **User Registration**: Create new users with validation and unique username/email enforcement.
- **Login/Logout**: Secure login with JWT tokens stored in HTTP cookies.
- **Password Management**: Change password functionality with validation.
- **Profile Management**: Update user details like avatar, cover image, email, and name.
- **File Uploads**: Upload avatars and cover images to Cloudinary.
- **Access Token Refresh**: Securely refresh access tokens using refresh tokens.
- **User Channel Profile**: Retrieve user profiles including subscription data.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **File Uploads**: Cloudinary API
- **Cookie Handling**: HTTP Cookies for storing JWT tokens
- **Environment Management**: dotenv

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShashikantBharti/backend.git
   cd backend
   ```
2. Run commance
   ```bash
   npm install
   ```

#### sample .env file

    ```bash
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your-jwt-secret
    REFRESH_TOKEN_SECRET=your-refresh-token-secret
    CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret
    ```

## API Endpoints

### Auth Routes

#### Method Endpoint Description

```bash
POST /api/auth/register Register a new user
POST /api/auth/login Login user
POST /api/auth/logout Logout user
POST /api/auth/refresh Refresh access token
```

### User Routes

#### Method Endpoint Description

```bash
  GET /api/users/me Get current user details
  PATCH /api/users/update Update user details
  POST /api/users/avatar Update user avatar
  POST /api/users/cover Update user cover image
  PATCH /api/users/password Change current password
```

### File Upload

Files such as avatars and cover images are uploaded to Cloudinary using the uploadOnCloudinary utility. Ensure proper configuration of your Cloudinary credentials in the .env file.
Error Handling
All errors are handled via the ApiError class, which generates custom error messages for different status codes (e.g., 400, 401, 404, 500). Each API response returns a structured JSON response via ApiResponse.

Error Response Example:
json

```bash
  {
  "status": 500,
  "message": "Error message"
  }
```

### Utils

asyncHandler: A utility function for handling asynchronous route controllers, catching errors, and passing them to the error handler
ApiResponse: Standardized API response wrapper.
ApiError: Custom error class to handle different HTTP status code errors.
uploadOnCloudinary: A utility to upload files to Cloudinary.

### Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page.

### License

This project is licensed under the MIT License.

```bash

This `README.md` is designed to provide an overview of your project, its features, setup instructions, and details about the API endpoints. Let me know if you need to customize any specific parts further!

```
