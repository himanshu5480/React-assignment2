import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import EditBlog from "./pages/EditBlog.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const h = <h1>hello</h1>;
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="blog/edit/:id" element={<EditBlog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
