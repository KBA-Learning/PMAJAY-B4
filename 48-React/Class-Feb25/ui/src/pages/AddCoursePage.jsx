// ui/src/pages/AddCoursePage.jsx
import React, { useState } from "react";

const AddCoursePage = () => {
  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseType, setCourseType] = useState("Self-Paced");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [courseImage, setCourseImage] = useState(null); // NEW: for the image file

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Build form data for multipart/form-data
      const formData = new FormData();
      formData.append("CourseName", courseName);
      formData.append("CourseId", courseId);
      formData.append("CourseType", courseType);
      formData.append("Description", description);
      formData.append("Price", price);
      // Append the file. Must match .single("courseImage") in server
      if (courseImage) {
        formData.append("courseImage", courseImage);
      }

      // POST using fetch with credentials
      const res = await fetch("/api/addCourse", {
        method: "POST",
        credentials: "include",
        // Do NOT manually set "Content-Type". The browser will do it automatically.
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error adding course");
      }

      alert("Course added successfully!");
      // Optionally reset form fields
      setCourseName("");
      setCourseId("");
      setCourseType("Self-Paced");
      setDescription("");
      setPrice("");
      setCourseImage(null);
    } catch (err) {
      console.error(err);
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Add Course</h2>
      {/* Important: encType="multipart/form-data" NOT strictly required 
          if we are using fetch + FormData, but can be used as a fallback */}
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        
        {/* Course Name */}
        <input
          type="text"
          placeholder="Course Name"
          className="w-full border p-2"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        {/* Course ID */}
        <input
          type="text"
          placeholder="Course ID"
          className="w-full border p-2"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />

        {/* Course Type */}
        <select
          className="w-full border p-2"
          value={courseType}
          onChange={(e) => setCourseType(e.target.value)}
        >
          <option value="Self-Paced">Self-Paced</option>
          <option value="Instructor-Led">Instructor-Led</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          rows={4}
          placeholder="Course Description"
          className="w-full border p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Course Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setCourseImage(e.target.files[0]);
              }
            }}
          />
        </div>

        <button className="bg-purple-500 text-white px-4 py-2 rounded" type="submit">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCoursePage;
