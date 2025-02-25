// ui/src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Unauthorized Access");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message || "Error fetching profile");
        navigate("/login"); 
      }
    };
    fetchProfile();
  }, [navigate]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      {error && <p className="text-red-500">{error}</p>}

      {profile ? (
        <div>
          <p>Welcome, {profile.userName}</p>
          <p>Your role is: {profile.userRole}</p>
        </div>
      ) : (
        <p>Loading Profile...</p>
      )}
    </div>
  );
};

export default Dashboard;
