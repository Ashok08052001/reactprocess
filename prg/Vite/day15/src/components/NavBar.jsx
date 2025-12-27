import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <Link
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "hover:text-blue-400"
        }
      >
        Home
      </Link>
      <Link
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "hover:text-blue-400"
        }
      >
        About
      </Link>
      <Link
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "hover:text-blue-400"
        }
      >
        Contact
      </Link>

      {/* <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-white"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-white"
        }
      >
        Contact
      </NavLink> */}
    </nav>
  );
};

export default Navbar;
