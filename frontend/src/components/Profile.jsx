import { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/UserContextProvider";
import BlogCard from "./BlogCard";
import axios from "axios";
import { Navigate } from "react-router-dom";

import demoUser from "../../public/assets/images/avatars/1.jpg";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({});
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = user;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios.post("/api/v1/user", {}, config);
        setUserProfile(data.user);
        setUserBlogs(data.user.blogs.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      {user === null && <Navigate to="/signup" />}

      <section className="">
        <div className="flex gap-14">
          <div className="w-[30%] flex flex-col items-center justify-start mt-5">
            <img
              src={demoUser}
              className="aspect-square h-[100px] w-[100px] md:h-[200px] md:w-[200px] lg:h-[350px] lg:w-[350px] rounded-full"
            />
            <p className="text-4xl font-bold mt-10">
              {userProfile.fullname && userProfile.fullname}
            </p>
            <p className="text-xl font-medium mt-4">
              {userProfile.email && userProfile.email}
            </p>
          </div>
          <div className="w-[70%]">
            <nav className="p-4 border-b">
              <p className="text-lg font-medium cursor-pointer underline underline-offset-8">
                Profile
              </p>
            </nav>

            <div className="flex justify-evenly mt-4">
              <div className="profile_counts">
                <p className="font-bold">{userBlogs.length}</p>
                <p className="text-sm">Posts</p>
              </div>
              <div className="profile_counts">
                <p className="font-bold">100</p>
                <p className="text-sm">Followers</p>
              </div>
              <div className="profile_counts">
                <p className="font-bold">200</p>
                <p className="text-sm">Following</p>
              </div>
            </div>

            <div className="h-[60%] overflow-y-scroll no-scrollbar mt-10">
              <p className="font-semibold text-lg p-2">Your Posts</p>
              {userBlogs.length != 0 ? (
                userBlogs.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    post={blog}
                    renderingOn="myprofile"
                    author={userProfile.fullname}
                  />
                ))
              ) : (
                <p className="p-2">Your Haven&apos;t Post Anything Yet</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
