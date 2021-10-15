const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
// const Plant = require("../models/Plant")


module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try{
      await Post.create({
        zip: req.body.zip,
        month: Number(req.body.month),
        likes: 0,
        user: req.user.id,
        usdaZoneData: req.body.zoneData
      });
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id }, //_id: req.params.zebra, how we find our matching ID 
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },

  
  // getPlants: async (req, res) => {
  //   //get plants that are in season based on month and zone 
  //   try{
  //     let post = await Post.findById({_id: req.params.id })
  //     const query = seasonalityByZone[post.usdaZoneData.zone]
  //     let plants = await Plant.find({ query: post.month })
  //     console.log(plants)
    
  //   //render in browser
  //   }catch(err){
  //   res.redirect("/profile")
  // }
  // },
  /*
  getRecipe: async (req, res) => {
    //get recipe from plant input
  },
  saveRecipe: async (req, res) => {
    //get recipe from edamam api
    //upload image to cloudinary
    //save recipe to user profile
  },
  madeRecipe: async (req, res) => {
    //find recipe and update
    //say you made this recipe
  },
  deleteRecipe: async (req, res) => {
    //find recipe by id
    //delete image from cloudinary
    //delete recipe from db
  }
  */
};
