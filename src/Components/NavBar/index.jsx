import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = "underline decoration-2 underline-offset-6 text-indigo-500 font-medium transition-all duration-300";
    return (
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-gray-800 shadow-lg">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-lg text-white hover:text-blue-400 transition duration-300">
            <NavLink to="/">JAFET SOLANO</NavLink>
          </li>
          <li>
            <NavLink
              to="/AboutMe"
              className={({ isActive }) => 
                `text-white hover:text-blue-400 transition duration-300 ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              AboutMe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) => 
                `text-white hover:text-blue-400 transition duration-300 ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Courses"
              className={({ isActive }) => 
                `text-white hover:text-blue-400 transition duration-300 ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => 
                `text-white hover:text-blue-400 transition duration-300 ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;