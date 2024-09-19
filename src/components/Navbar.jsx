import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-500 h-[60px] flex justify-around items-center">
      <div className="text-3xl font-semibold text-slate-100">
        React Assignment 2
      </div>
      <div className="flex gap-5 text-lg font-semibold text-slate-100">
        <Link to="home">
          <div className="cursor-pointer hover:underline">Home</div>
        </Link>
        <Link to="about">
          <div className="cursor-pointer hover:underline">About</div>
        </Link>
        <Link to="contact">
          <div className="cursor-pointer hover:underline">Contact</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
