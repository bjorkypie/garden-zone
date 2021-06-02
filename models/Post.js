const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  zip: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // myZone: {
  //   type: String,
  //   required: false,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);

/*
later, include a saved recipe schema
also, include these:
zone: {
    type: String,
    require: true,
  },
  plant: {
    type: String,
    require: true,
  },
*/