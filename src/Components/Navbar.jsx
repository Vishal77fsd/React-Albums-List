import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // state to check which page is active
  const [isActive, setIsActive] = useState("Home");

  return (
    <div className="bg-slate-500 font-edu text-3xl font-bold flex justify-center items-center h-20 gap-10 fixed top-0 w-full z-10">
      <NavLink
        to="/"
        className={
          isActive === "Home" ? "bg-black/[0.2] p-2 rounded-lg text-white" : ""
        }
        onClick={() => setIsActive("Home")}
      >
        Home
      </NavLink>
      <NavLink
        to="/add-album"
        className={
          isActive === "new-album"
            ? "bg-black/[0.2] p-2 rounded-lg text-white"
            : ""
        }
        onClick={() => setIsActive("new-album")}
      >
        Add Album
      </NavLink>
    </div>
  );
};

export default Navbar;
