import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import Login from "./pages/Login";
import Register from "./pages/Register"; // ✅ Import Register page
import Dashboard from "./pages/Dashboard";
import Setup from "./pages/Setup";
import Intergration from "./pages/Intergration";
import UserProfile from "./pages/UserProfile";
import Reminder from "./pages/Reminder";
import Action from "./pages/Action";
import DashboardStatistics from "./pages/Statistics";

const RedirectToHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/dashboard`, { replace: true });
  }, [navigate]);
  return null;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Add Register Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<DashboardStatistics />} />
        <Route path="/register/setup" element={<Setup />} />
        <Route path="/register/intergration" element={<Intergration />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/action" element={<Action />} />
      </Routes>
    </Router>
  );
}

export default App;
