const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { getZone } = require("../middleware/zones")

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/create-post", getZone, postsController.createPost);

// router.put("/in-season", postsController.getPlants);

router.put("/like-post/:id", postsController.likePost); //"/likePost/:zebra"

router.delete("/delete-post/:id", postsController.deletePost);

module.exports = router;
