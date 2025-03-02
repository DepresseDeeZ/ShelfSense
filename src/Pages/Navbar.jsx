import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation(); // Detect current route

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex h-15 w-full text-[10px] justify-around items-center bg-deep_charcoal text-light_almond font-2ppress">
        <div><Link to="/">logo</Link></div>
        <div>
        <ul className="flex space-x-6">
          {[
            { name: "Dashboard", path: "/dashboard" },
            { name: "Tool Images", path: "/toolimages" },
            { name: "Sheets", path: "/sheets" },
            { name: "Tool Management", path: "/toolmanagement" },
            { name: "Tool Production", path: "/toolproduction" },
            { name: "Production Order", path: "/productionorder" },
            { name: "User", path: "/user" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-orange-400 transition delay-100 pb-1 ${
                  location.pathname === item.path
                    ? "border-b-2 border-orange-400" // Active link gets an underline
                    : "border-b-2 border-transparent" // Non-active links are transparent
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full transition-all bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="flex space-x-2 cursor-pointer">
        <p className="hover:text-orange-400 transition delay-100">X</p>
        <p className="hover:text-orange-400 transition delay-100">Log Out</p>
      </div>
    </nav>
  );
};

export default Navbar;
