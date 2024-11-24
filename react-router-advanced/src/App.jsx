import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // Import for dynamic routing

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the Advanced React Router Application</h1>
        <Routes>
          {/* Existing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />

          {/* Dynamic Route for Blog Posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

