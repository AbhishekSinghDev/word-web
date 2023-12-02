import express from "express";
import verifyToken from "../middleware/verify-token.js";
import {
  followUser,
  getSingleUserDetail,
  getUserDetails,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/", verifyToken, getUserDetails);
router.get("/:id", getSingleUserDetail);
router.put("/:user_id", verifyToken, followUser);

export default router;
