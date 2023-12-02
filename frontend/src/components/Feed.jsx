import BlogCard from "../components/BlogCard";

const Feed = ({ blogs }) => {
  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            post={blog}
            renderingOn="Feed"
            author={blog.author.fullname}
            authorId={blog.author._id}
          />
        ))}
    </div>
  );
};

export default Feed;
