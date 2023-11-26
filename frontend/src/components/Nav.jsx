import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-12">
          <img src="./assets/icon/logo-1.svg" className="w-full" />
        </Link>

        <div
          className={
            "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-gray-200 py-4 px-[5vw] md:border-none md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
            (searchBoxVisibility ? "show" : "hide")
          }
        >
          <input
            type="text"
            placeholder="Search Blogs.."
            className="w-full md:w-auto bg-gray-200 p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-gray-600 md:pl-14"
          />

          <img
            src="./assets/icon/search.svg"
            className="w-6 h-6 absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2"
          />
        </div>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <Link
            className="md:hidden bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => setSearchBoxVisibility((currVal) => !currVal)}
          >
            <img src="./assets/icon/search.svg" className="h-6 w-6" />
          </Link>

          <Link
            to="/editor"
            className="hidden md:flex gap-2 link items-center justify-center"
          >
            <img src="./assets/icon/write.svg" className="h-4 opacity-90" />
            <p className="font-noto">Write</p>
          </Link>

          <Link to="/signin" className="btn-dark py-2">
            <p>Sign In</p>
          </Link>

          <Link to="/signup" className="btn-light py-2 hidden md:block">
            <p>Sign Up</p>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
