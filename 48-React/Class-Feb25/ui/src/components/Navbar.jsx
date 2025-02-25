// ui/src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/kbalogo.png";
import Logout from "./Logout";
// Import the custom hook
import useProfile from "../hooks/useProfile";

const Navbar = () => {
  const { profile, loading } = useProfile();

  // Optionally, show a loading state
  if (loading) {
    return (
      <div className="bg-purple-100 text-purple-950 p-3 shadow-md">
        <p>Loading user...</p>
      </div>
    );
  }

  // If profile is null, user is not logged in
  // If profile.userRole === 'admin', user is admin
  const userRole = profile?.userRole;

  return (
    <div className="bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md">
      <div className="flex items-center">
        <Link to="/home">
          <img className="m-1p-2 size-12" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10">
        <Link to="/home" className="ml-20">
          Home
        </Link>
        <Link to="/courses" className="ml-20">
          Courses
        </Link>
        <Link to="/contact" className="ml-20">
          Contact Us
        </Link>
        {userRole === "admin" && (
          <Link to="/add-course" className="ml-20">
            Add Course
          </Link>
        )}
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
