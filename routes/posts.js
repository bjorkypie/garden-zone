const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { getZone } = require("../middleware/zones")

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", getZone, postsController.createPost);

router.put("/likePost/:id", postsController.likePost); //"/likePost/:zebra"

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
