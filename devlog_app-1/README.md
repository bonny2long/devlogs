# DevLog App

## Overview
The DevLog App is a React-based application designed to help users maintain a developer log. It allows users to document their learning journey, track progress, and showcase their skills.

## Project Structure
```
devlog_app
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── data
│   │   └── devLogData.js
│   ├── components
│   │   ├── Hero.jsx
│   │   ├── Navbar
│   │   │   ├── Navbar.jsx
│   │   │   └── NavLink.jsx
│   │   ├── Sidebar
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProfileImage.jsx
│   │   │   └── AboutSection.jsx
│   │   ├── DevLog
│   │   │   ├── DevLogEntry.jsx
│   │   │   ├── DevLogList.jsx
│   │   │   ├── DateBadge.jsx
│   │   │   └── ToggleButton.jsx
│   │   └── Layout
│   │       └── Container.jsx
│   └── styles
│       └── global.css
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd devlog_app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
This will start the Vite development server, and you can view the application in your browser at `http://localhost:3000`.

### Building for Production
To create a production build of the application, run:
```
npm run build
```
This will generate a `dist` folder containing the optimized files for deployment.

## Features
- User-friendly interface to log development progress.
- Toggle functionality to view more or fewer log entries.
- Responsive design for accessibility on various devices.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.