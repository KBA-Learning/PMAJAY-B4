import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopCourses from './components/TopCourses'
import CourseGrid from './components/CourseGrid'
import AllCoursesButton from './components/AllCoursesButton'
import coursesData from './assets/data/courses.json'

const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <TopCourses />
    <CourseGrid courses={coursesData} />
    <AllCoursesButton />
   
    </div>
  )
}

export default App