import express from "express";
import {
  publishBlog,
  getAllBlogs,
  getSingleBlog,
} from "../controller/blog-controller.js";
import verifyToken from "../middleware/verify-token.js";

const router = express.Router();

router.post("/new", verifyToken, publishBlog);
router.get("/all", getAllBlogs);
router.get("/:blog_id", getSingleBlog);

export default router;
