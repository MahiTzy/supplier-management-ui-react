# Supplier Management Application Frontend

This repository contains the frontend of the Supplier Management Application, built with React and Vite. The frontend consumes APIs provided by the [backend Spring Boot application](https://github.com/MahiTzy/makersharks-supplier-api-springboot) to manage suppliers based on various criteria.

## Table of Contents

- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Running the Application](#running-the-application)
- [API Integration](#api-integration)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Testing the Application](#testing-the-application)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

## Screenshots

![Screenshot 2024-08-23 at 23-47-38 Vite React](https://github.com/user-attachments/assets/d0d2fdd3-1ff0-4ef3-bd17-a8fcb13a8577)
![Screenshot 2024-08-23 at 23-55-45 Vite React](https://github.com/user-attachments/assets/0d2a2a58-f877-4c23-afe1-2175280c2230)
![Screenshot 2024-08-23 at 23-55-28 Vite React](https://github.com/user-attachments/assets/cecb2b88-6ef2-474f-b48e-78575e979710)
![Screenshot 2024-08-23 at 23-55-06 Vite React](https://github.com/user-attachments/assets/bc81cd8b-f6fd-4f90-b3a7-a23e48c1f7ea)


### Cloning the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/MahiTzy/supplier-management-ui-react.git
cd supplier-management-ui-react
```

## Running the Application

1. **Install dependencies**:

   If you are using npm:

   ```bash
   npm install
   ```

2. **Start the development server**:

   If you are using npm:

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173).

## API Integration

This frontend application consumes APIs from the backend Spring Boot application. Ensure the backend is running before using the frontend.

### API Endpoints

The frontend application uses the following API endpoints:

- **GET /api/supplier/query** - Fetch suppliers based on location, nature of business, and manufacturing process.

Ensure you have the backend running on `http://localhost:8080` or update the base URL in the frontend configuration if the backend is hosted on a different server.

### Configuration

To configure the API endpoint, update the base URL in the appropriate configuration file:

- **File**: `src/app.jsx` (change `http://localhost:8080` accordingly)

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run serve`**: Serves the production build locally.

## Folder Structure

The project directory structure is as follows:

```
supplier-management-ui-react/
├── public/
├── src/
│   ├── assests/
│   ├── App.css
│   ├── App.jsx
│   └── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Dependencies

Key dependencies used in this project:

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tooling for fast builds.

You can view all dependencies in the `package.json` file.

## Testing the Application

### Using Postman

Postman can be used to test the backend API endpoints separately.

### Using the Browser

You can test the frontend application by running it locally and interacting with the UI to make API calls.

