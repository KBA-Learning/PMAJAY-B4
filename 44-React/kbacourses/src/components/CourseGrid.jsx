import React from 'react'
import CourseCard from './CourseCard'

const CourseGrid = ({courses}) => {
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
   {courses.map((course)=>(
    <CourseCard key={courses.courseId} course={course} />
   ))}
    </div>
  )
}

export default CourseGrid