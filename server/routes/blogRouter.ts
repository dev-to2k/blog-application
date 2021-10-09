import express from "express";
import blogCtrl from "../controllers/blogCtrl";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/blog", auth, blogCtrl.createBlog);

router.get("/home/blogs", blogCtrl.getHomeBlogs);

router.get("/blogs/:category_id", blogCtrl.getBlogsByCategory);

router.get("/blogs/user/:id", blogCtrl.getBlogsByUser);

export default router;
