import avatar1 from "../../public/assets/images/avatars/1.jpg";
// import avatar2 from "../../public/assets/images/avatars/2.jpg";
// import avatar3 from "../../public/assets/images/avatars/3.jpg";
// import avatar4 from "../../public/assets/images/avatars/4.jpg";
// import avatar5 from "../../public/assets/images/avatars/5.jpg";
// import avatar6 from "../../public/assets/images/avatars/6.jpg";
// import avatar7 from "../../public/assets/images/avatars/7.jpg";
// import avatar8 from "../../public/assets/images/avatars/8.jpg";
// import avatar9 from "../../public/assets/images/avatars/9.jpg";
// import avatar10 from "../../public/assets/images/avatars/10.jpg";
// import avatar11 from "../../public/assets/images/avatars/11.jpg";
// import avatar12 from "../../public/assets/images/avatars/12.jpg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profileicon = () => {
  const [userAvatar, setUserAvatar] = useState(avatar1);
  useEffect(() => {
    const randomAvatar = Math.floor(Math.random() * 13);
    setUserAvatar(`../../public/assets/images/avatars/${randomAvatar}.jpg`);
  }, [userAvatar]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("access_token");
    location.reload();
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      <Link to="/profile">
        <img
          src={userAvatar}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer"
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
