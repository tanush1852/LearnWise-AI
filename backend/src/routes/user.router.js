import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  getUserById,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.post(
  "/register",
  (req, res, next) => {
    console.log("Register route hit");
    next();
  },
  upload.fields([{ name: "avatar", maxCount: 1 }]),
  registerUser
);

router.post("/login", loginUser);

// Secured routes
router.post("/logout", verifyJWT, logoutUser);

router.get("/current", verifyJWT, getCurrentUser);
router.get("/:id", getUserById);

export default router;
