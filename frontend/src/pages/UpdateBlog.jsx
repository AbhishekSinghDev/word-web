import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlogUpdateForm from "../components/BlogUpdateForm";

const UpdateBlog = () => {
  const [oldBlog, setOldBlog] = useState({});
  const { blogid } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const { data } = await axios.get(`/api/v1/blog/${blogid}`);
      setOldBlog(data.blog);
    };

    fetchBlogDetails();
  }, []);

  return (
    <>
      <section>
        <div className="flex items-center justify-center">
          <BlogUpdateForm oldBlog={oldBlog} blogId={blogid} />
        </div>
      </section>
    </>
  );
};

export default UpdateBlog;
