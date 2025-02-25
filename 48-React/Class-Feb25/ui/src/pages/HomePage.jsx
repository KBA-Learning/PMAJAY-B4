import React from "react";
import CourseGrid from "../components/CourseGrid";
import Hero from "../components/Hero";
import TopCourses from "../components/TopCourses"
import AllCoursesButton from "../components/AllCoursesButton";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TopCourses />
      <CourseGrid isHome={true} />
      <AllCoursesButton />
    </>
  );
};

export default HomePage;