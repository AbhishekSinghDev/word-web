import express from "express";
import { publishBlog } from "../controller/blog-controller.js";
import verifyToken from "../middleware/verify-token.js";

const router = express.Router();

router.post("/new", verifyToken, publishBlog);

export default router;
