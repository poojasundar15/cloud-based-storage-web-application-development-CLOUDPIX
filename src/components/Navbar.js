import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Navbar({ setUser }) {
  const naviage = useNavigate();
  const classes =
    "transition-all duration-75 ml-3 sm:ml-5 text-gray-700 tracking-wide border-b-4 border-transparent hover:text-gray-800 hover:border-b-2 hover:border-gray-600 cursor-pointer";

  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
      naviage("/");
    });
  };

  return (
    <nav className="bg-gray-50 z-50 sticky top-0 flex justify-end w-full p-4">
      <Link to="/" className={classes}>
        <span>Home</span>
      </Link>

      <Link to="/profile" className={classes}>
        <span>Profile</span>
      </Link>

      <span className={classes} onClick={logout}>
        Logout
      </span>
    </nav>
  );
}

export default Navbar;
