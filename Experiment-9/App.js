import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🚀 CI/CD React App</h1>
        <p>Automated Deployment using GitHub Actions & Docker</p>
      </header>

      <main className="container">
        <div className="card">
          <h2>⚙️ Features</h2>
          <ul>
            <li>✔️ Automated Testing</li>
            <li>✔️ Docker Image Build</li>
            <li>✔️ CI/CD Pipeline</li>
            <li>✔️ Slack Notifications</li>
          </ul>
        </div>

        <div className="card">
          <h2>📦 Deployment Info</h2>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Version:</strong> Latest</p>
          <p><strong>Environment:</strong> Production</p>
        </div>

        <div className="card highlight">
          <h2>🎯 Goal</h2>
          <p>
            This project demonstrates a complete CI/CD pipeline from development
            to deployment using modern DevOps tools.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 | Built by Swarnim 🚀</p>
      </footer>
    </div>
  );
}

export default App;
