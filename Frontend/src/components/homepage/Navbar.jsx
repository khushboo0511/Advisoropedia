import { useNavigate } from "react-router-dom";

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
              height={104}
              width={150}
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex text-sm text-slate-100">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="popup-text px-3 cursor-pointer  ">
                <a>Home</a>
              </li>
              <li className="popup-text px-3 cursor-pointer  ">
                <a>About</a>
              </li>
              <li className="popup-text px-3 cursor-pointer  ">
                <a>What We Do</a>
              </li>
              <li className="popup-text px-3 cursor-pointer  ">
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost mr-2 text-slate-100 hover:text-slate-700 hover:bg-transparent"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </a>
          <a
            className="btn btn-sm bg-slate-300 text-black border-transparent hover:bg-slate-700 hover:text-white hover:border-transparent"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;