const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  zone: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  made: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  /*
  keyIngredient: {
    type: String,
    required: false,
    ref: "Ingredient",
  },
  */
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);