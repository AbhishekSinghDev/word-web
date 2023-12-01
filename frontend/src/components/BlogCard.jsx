import moment from "moment";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ post, renderingOn, author }) => {
  const { title, banner, description, createdAt, tag } = post;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post._id}`);
  };

  return (
    <>
      <div
        className="flex gap-2 border-b m-2 p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className={renderingOn === "Home" ? "w-full" : "w-[70%]"}>
          <p className="text-sm font-semibold mt-2 mb-1">{author}</p>
          <p className="font-bold sm:text-2xl text-lg mt-2">{title}</p>
          <p className="text-sm mt-2 mb-2 text-ellipsis lg:whitespace-normal whitespace-nowrap overflow-hidden">
            {description}
          </p>
          <p className="text-blue-500 font-medium text-sm my-2 cursor-pointer">
            #{tag}
          </p>
          <p className="text-sm font-semibold">
            {moment(createdAt).format("MMM Do YYYY")}
          </p>
        </div>
        {renderingOn == "Home" ? (
          <div></div>
        ) : (
          <div className="w-[30%] p-2 sm:block hidden">
            <img src={banner} className="rounded-lg" />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogCard;
