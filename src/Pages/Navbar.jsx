import React from 'react'
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
    <nav className='flex h-15 w-full text-[10px] justify-around items-center bg-deep_charcoal text-light_almond font-2ppress '>
        <div>logo</div>
        <div >
        <ul className='flex space-x-6 '>
          <li className="hover:text-orange-400 transition delay-100" ><Link to="/">Dashboard</Link></li>
          <li className="hover:text-orange-400 transition delay-100"> <Link to="/toolimages">Tool Images</Link></li>
          <li className="hover:text-orange-400 transition delay-100"> <Link to="/sheets">Sheets</Link></li>
          <li className="hover:text-orange-400 transition delay-100"> <Link to="/toolmanagement">Tool Management</Link> </li>
          <li className="hover:text-orange-400 transition delay-100"> <Link to="/toolproduction">Tool Production</Link> </li>
          <li className="hover:text-orange-400 transition delay-100"> <Link to="/productionorder">Production Order</Link> </li>
          <li className="hover:text-orange-400 transition delay-100"> <Link to="/user">User</Link> </li>
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
        
        <div className='flex space-x-2 cursor-pointer '>
          <p className="hover:text-orange-400 transition delay-100">X</p>
          <p className="hover:text-orange-400 transition delay-100">Log Out</p>
        </div>
    </nav>
  )
}

export default navbar