import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav navbar bg-transparent px-8 mx-auto w-11/12">
        <div className="navbar-start">
          <a className="cursor-pointer">
            <img
              src="https://advisoropedia.in/wp-content/uploads/2024/02/cropped-White-Transparent.png"
              alt=""
              height={200}
              width={200}
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <div>
          <ul className="flex text-base font-semibold text-slate-100">
            <li className="popup-text px-3 cursor-pointer hover:text-white ">
              <a>Home</a>
            </li>

            <li className="popup-text px-3 cursor-pointer hover:text-white ">
              <a>About</a>
            </li>
            <li className="popup-text px-3 cursor-pointer hover:text-white ">
              <a>What We Do</a>
            </li>
            <li className="popup-text px-3 cursor-pointer hover:text-white ">
              <a>Contact Us</a>
            </li>
          </ul>

          </div>
          <div>

          <a
            className="btn btn-sm rounded-lg px-2 text-xl font-semibold bg-slate-300 text-black border-transparent hover:bg-slate-700 hover:text-white hover:border-transparent"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </a>
          <a
            className="btn btn-sm rounded-lg px-2 text-xl font-semibold bg-red-500 text-black border-transparent hover:bg-slate-700 hover:text-white hover:border-transparent"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-transparent lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 "
                fill="none"
                viewBox="0 0 20 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;