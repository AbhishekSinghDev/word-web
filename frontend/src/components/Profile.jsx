import { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/UserContextProvider";
import BlogCard from "./BlogCard";
import axiosInstance from "../axiosInstance.js";
import { Navigate } from "react-router-dom";

import avatar1 from "../assets/images/avatars/1.png";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({});
  const [userBlogs, setUserBlogs] = useState([]);
  const [userAvatar, setUserAvatar] = useState(avatar1);
  useEffect(() => {
    const randomAvatar = Math.floor(Math.random() * 11);
    setUserAvatar(`../assets/images/avatars/${randomAvatar}.png`);
  }, [userAvatar]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = user;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axiosInstance.post("/api/v1/user", {}, config);
        setUserProfile(data.user);
        setUserBlogs(data.user.blogs.reverse());
      } catch (err) {
        toast.error(err.message);
        if (err.response.data.success == false) {
          toast.error(`${err.response.data.message}`);
        }
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      {user === null && <Navigate to="/signup" />}
      <Toaster />
      <section className="h-auto">
        <div className="flex flex-col md:flex-row gap-14">
          <div className="w-[100%] md:w-[30%] flex flex-col items-center justify-start mt-5">
            <div>
              <img
                src={userAvatar}
                className="aspect-square h-[400px] w-[400px] md:h-[200px] md:w-[200px] lg:h-[350px] lg:w-[350px] object-cover"
                alt="profile_icon"
              />
            </div>
            <p className="text-4xl font-bold mt-10">
              {userProfile.fullname && userProfile.fullname}
            </p>
            <p className="text-xl font-medium mt-4">
              {userProfile.email && userProfile.email}
            </p>
          </div>

          <div className="w-[100%] md:w-[70%]">
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
                <p className="font-bold">
                  {userProfile.followers && userProfile.followers.length}
                </p>
                <p className="text-sm">Followers</p>
              </div>
              <div className="profile_counts">
                <p className="font-bold">
                  {userProfile.following && userProfile.following.length}
                </p>
                <p className="text-sm">Following</p>
              </div>
            </div>

            <div className="h-[100%] overflow-y-scroll no-scrollbar mt-10">
              <p className="font-semibold text-lg p-2">Your Posts</p>
              {userBlogs.length != 0 ? (
                userBlogs.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    post={blog}
                    renderingOn="myprofile"
                    author={userProfile.fullname}
                    authorId={userProfile._id}
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
