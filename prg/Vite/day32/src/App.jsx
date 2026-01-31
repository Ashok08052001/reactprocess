import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TogglePage from "./pages/TogglePage";
import CounterPage from "./pages/CounterPage";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import ThemePage from "./pages/ThemePage";
import PreviousPage from "./pages/PreviousPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <nav className="bg-white shadow p-4">
          <div className="container mx-auto flex gap-4">
            <Link to="/" className="text-blue-600">
              Home
            </Link>
            <Link to="/toggle" className="text-blue-600">
              Toggle
            </Link>
            <Link to="/counter" className="text-blue-600">
              Counter
            </Link>
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
            <Link to="/posts" className="text-blue-600">
              Posts
            </Link>
            <Link to="/theme" className="text-blue-600">
              Theme
            </Link>
            <Link to="/previous" className="text-blue-600">
              Previous
            </Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="p-8">
                Home — go to{" "}
                <Link to="/toggle" className="text-blue-600 underline">
                  Toggle
                </Link>
              </div>
            }
          />
          <Route path="/toggle" element={<TogglePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/previous" element={<PreviousPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
