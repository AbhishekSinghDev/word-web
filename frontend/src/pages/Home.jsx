import React, { Suspense } from "react";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContextProvider";

import Tags from "../components/Tags";
import toast, { Toaster } from "react-hot-toast";

const Feed = React.lazy(() => import("../components/Feed"));

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const { data } = await axios.get("/api/v1/blog/all");
        setBlogs(data.blogs.reverse());
      } catch (err) {
        toast.error(err.message);
        if (err.response.data.success == false) {
          toast.error(`${err.response.data.message}`);
        }
      }
    };

    fetchAllPost();
  }, []);

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
        setUserPosts(data.user.blogs);
      } catch (err) {
        toast.error(err.message);
        if (err.response.data.success == false) {
          toast.error(`${err.response.data.message}`);
        }
      }
    };
    fetchUserDetails();
  }, [user]);

  return (
    <>
      <Toaster />
      <section className="">
        <div className="flex md:flex-row flex-col-reverse gap-4">
          <div className="w-full md:w-[70%] h-[87vh] overflow-y-scroll no-scrollbar">
            <p className="text-3xl font-bold font-montserrat px-4">
              Latest Posts
            </p>
            <Suspense fallback={<p>Loading...</p>}>
              <Feed blogs={blogs} />
            </Suspense>
          </div>

          <hr />

          <div className="w-full md:w-[30%]">
            <div className="flex flex-wrap justify-start gap-2 px-4 py-6">
              {Tags &&
                Tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-full px-4 py-2 text-black"
                  >
                    {tag}
                  </div>
                ))}
            </div>

            <p className="text-2xl font-semibold p-4 font-montserrat">
              {" "}
              Your Posts
            </p>
            <div className="md:h-[58vh] overflow-y-scroll no-scrollbar">
              {userPosts.length != 0 && user ? (
                userPosts.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    post={blog}
                    author={blog.author.fullname}
                    renderingOn="Home"
                  />
                ))
              ) : (
                <p className="p-4">
                  You Haven&apos;t Post Anything Yet{" "}
                  <Link to="/editor" className="text-blue-500 font-semibold">
                    Write Now
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
