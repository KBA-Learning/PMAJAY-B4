// ui/src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AddCoursePage from "./pages/AddCoursePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CoursePage, { courseLoader } from "./pages/CoursePage";
import EditCoursePage from "./pages/EditCoursePage";
import Dashboard from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* AUTH LAYOUT */}
        <Route path="/" element={<AuthLayout />}>
          {/* The index route -> "/" shows LoginPage */}
          <Route index element={<LoginPage />} />
          {/* Sign-up route -> "/sign-up" */}
          <Route path="sign-up" element={<SignupPage />} />
        </Route>

        {/* MAIN LAYOUT */}
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="add-course" element={<AddCoursePage />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Single course route by courseName param. */}
          <Route
            path="courses/:courseName"
            element={<CoursePage />}
            loader={courseLoader}
          />

          {/* Edit course route by courseName param. */}
          <Route path="edit-course/:courseName" element={<EditCoursePage />} />

          {/* Fallback for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
