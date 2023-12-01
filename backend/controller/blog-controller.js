import Blog from "../model/blog.js";
import User from "../model/user.js";

const publishBlog = async (req, res) => {
  const { title, banner, description, content, tag } = req.body;
  // console.log(req.body);
  if (!title && !description && !content) {
    res.status(400).json({
      success: false,
      message: "Provide all the information for blog",
    });
  }

  try {
    const newBlog = new Blog({
      author: req.userid,
      title: title,
      banner: banner,
      description: description,
      content: content,
      tag: tag,
    });

    await newBlog.save();

    const updateUser = await User.findByIdAndUpdate(
      req.userid,
      {
        $push: { blogs: newBlog._id },
      },
      {
        new: true,
      }
    );

    if (updateUser) {
      res.status(201).json({
        success: true,
        message: "Blog published successfully",
      });
    }
  } catch (err) {
    console.log("Error while publishing blog");
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to publish blog, Internal server error",
    });
  }
};
const readBlog = async (req, res) => {};
const updateBlog = async (req, res) => {};
const deleteBlog = async (req, res) => {};

export { publishBlog, readBlog, updateBlog, deleteBlog };
