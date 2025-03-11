import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import useProfile from "../hooks/useProfile"; // Replaces getUserType
import banner from "../assets/images/banner-kba.png";

// Loader function for fetching course data
export const courseLoader = async ({ params }) => {
  const courseNameParam = params.courseName;
  try {
    const res = await fetch(`/api/getCourse?courseName=${encodeURIComponent(courseNameParam)}`);
    
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.msg || "Failed to fetch course data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Course loading error:", error.message);
    return {
      courseName: "Not Found",
      description: "No description available",
      price: 0,
      imageUrl: null,
    };
  }
};

const CoursePage = () => {
  const { courseName } = useParams();
  const course = useLoaderData();
  const navigate = useNavigate();
  const { profile, loading } = useProfile();

  // Course image logic: use API URL or fallback banner
  const displayedImage = course.imageUrl ? course.imageUrl : banner;

  if (loading) {
    return <div className="text-center p-10">Loading course details...</div>;
  }

  return (
    <div className="bg-white text-gray-900 mb-10 pb-10">
      <div className="max-w-4xl mx-auto p-5">
        <section>
          <Link className="flex items-center my-5 gap-1 font-medium" to="/courses">
            Back to Courses
          </Link>
        </section>

        <div className="bg-purple-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src={displayedImage}
            alt="Course Thumbnail"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-purple-800">
              {course.courseName}
            </h1>
            <p>{course.description}</p>
            <span className="text-2xl text-red-500 font-semibold mr-4">
              ₹{course.price}
            </span>
          </div>
        </div>
      </div>

      {profile?.userRole === "admin" && (
        <div className="flex flex-row justify-end gap-4 mr-[205px]">
          <Link
            to={`/edit-course/${courseName}`}
            className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full h-10 w-32 focus:outline-none focus:shadow-outline justify-center items-center"
          >
            Edit Course
          </Link>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
