import React, { useState } from "react";
import { Link } from "react-router-dom";
import rpImage from "../assets/images/rp.png";
import useProfile from "../hooks/useProfile"; // Import useProfile hook

const CourseCard = ({ course }) => {
  const [showFullDescription, setShowFullDescription] = useState(true);
  const { profile, loading } = useProfile(); // Get user profile

  const description = showFullDescription
    ? course.description
    : course.description.substring(0, 80);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-purple-100 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10">
      <h2 className="font-bold text-lg text-purple-900">{course.courseName}</h2>
      <img src={rpImage} alt="course thumbnail" className="w-80 h-40" />

      <p className="text-black group-hover:text-white my-2 mx-5">
        {description}
      </p>

      <button
        className="flex flex-col w-full px-5 text-purple-400 hover:text-purple-600 py-2"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        {showFullDescription ? "Less" : "More"}
      </button>

      {/* Redirect to CoursePage when clicking "Learn More" */}
      <Link
        to={`/courses/${encodeURIComponent(course.courseName)}`}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5"
      >
        Learn More
      </Link>

     
    </div>
  );
};

export default CourseCard;
