import avatar1 from "../assets/images/avatars/1.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profileicon = () => {
  const [userAvatar, setUserAvatar] = useState(avatar1);
  useEffect(() => {
    const randomAvatar = Math.floor(Math.random() * 11);
    setUserAvatar(`../../src/assets/images/avatars/${randomAvatar}.png`);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("access_token");
    location.reload();
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      <Link to="/profile">
        {console.log(userAvatar)}
        <img
          src={userAvatar}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer"
          alt="profile_icon"
        />
      </Link>
      <button
        onClick={handleLogout}
        className="border-none px-4 text-sm sm:text-base sm:px-10 py-2 whitespace-nowrap rounded-md bg-gray-500 text-white font-medium"
      >
        Log out
      </button>
    </div>
  );
};

export default Profileicon;
