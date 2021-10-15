const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  zip: {
    type: String,
    required: true,
  },
  month: {
    type: Number,
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
  usdaZoneData:{
    type: Object,
    required: true,
  },
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