import moment from "moment";

const BlogCard = ({ post, renderingOn, author }) => {
  const { title, banner, description, createdAt } = post;

  return (
    <>
      <div className="flex gap-2 border border-gray-300 rounded-md m-2 p-4">
        <div className="w-[70%]">
          <p className="text-sm font-semibold mt-2 mb-1">
            Author: {renderingOn == "myprofile" ? author : "hello"}
          </p>
          <p className="font-bold text-2xl mt-2">{title}</p>
          <p className="text-sm mt-2 mb-2">{description}</p>
          <p className="text-sm font-semibold">
            Published On: {moment(createdAt).format("MMM Do YYYY")}
          </p>
        </div>
        <div className="w-[30%] p-2">
          <img src={banner} className="rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
