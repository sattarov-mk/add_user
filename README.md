# User Management App 👥

A React application for managing users with validation and deletion confirmation.

## Features

* Add new users
* Input validation
* Display a list of users
* Delete users with confirmation modal
* Reusable UI components
* Component-based architecture
* Responsive and clean interface

## Technologies Used

* React 19
* JavaScript (ES6+)
* CSS Modules
* Create React App

## Project Structure

```text
src/
├── components/
│   ├── UserForm.jsx
│   ├── PeopleList.jsx
│   │
│   ├── ui/
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   │
│   ├── UserForm.module.css
│   ├── PeopleList.module.css
│   ├── Button.module.css
│   └── Card.module.css
│
├── App.js
├── index.js
└── index.css
```

## Functionality

### Add User

The application allows users to add a new person by entering:

* Name
* Age

Before adding a user, the application validates:

* Name must not be empty
* Age must not be empty
* Age must be a positive number

### User List

All added users are displayed in a dynamic list.

Each user record contains:

* Name
* Age

### Delete User

Users can be removed from the list.

To prevent accidental deletion, the application displays a confirmation dialog before removing a user.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/user-management-app.git
```

Navigate to the project directory:

```bash
cd user-management-app
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Open in browser:

```text
http://localhost:3000
```

## Concepts Demonstrated

This project demonstrates:

* React Components
* Props
* State Management with useState
* Controlled Components
* Form Validation
* Conditional Rendering
* Event Handling
* Dynamic Lists
* CSS Modules
* Reusable UI Elements

## Screenshots

Add screenshots of:

1. User creation form
2. User list
3. Delete confirmation modal

Example:

```md
![User Form](screenshots/form.png)
![User List](screenshots/list.png)
![Confirmation Dialog](screenshots/modal.png)
```

## Future Improvements

* Edit user information
* Search users
* Sort users by age or name
* Persistent storage using Local Storage
* Backend integration
* Authentication system
* Pagination for large datasets

## Educational Purpose

This project was created to practice React fundamentals, including state management, form handling, validation, component communication, and reusable UI development.
