import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../context/UserContextProvider";
import Profileicon from "./ProfileIcon";
import { Toaster } from "react-hot-toast";

const Nav = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <nav className="navbar">
        <Toaster />
        <Link
          to="/"
          className="flex-none flex items-center justify-center w-auto gap-4"
        >
          <img src="./assets/icon/logo-1.svg" className="w-12" />
          <p className="text-xl font-bold font-montserrat hidden sm:block">
            Word Web
          </p>
        </Link>

        <div className="flex items-center gap-1 md:gap-6 ml-auto">
          <Link
            to="/editor"
            className="flex gap-2 link items-center justify-center"
          >
            <img src="./assets/icon/write.svg" className="h-4 opacity-90" />
            <p className="font-noto text-sm sm:text-base">Write</p>
          </Link>

          {user ? (
            <Profileicon />
          ) : (
            <>
              <Link to="/signin" className="btn-dark py-2">
                <p>Sign In</p>
              </Link>

              <Link to="/signup" className="btn-light py-2 hidden md:block">
                <p>Sign Up</p>
              </Link>
            </>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
