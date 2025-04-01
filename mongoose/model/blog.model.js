const { Schema, model } = require("mongoose");

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    show: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    bookmarks: { type: [String], default: [] },
  },
  { timestamps: true }
);

const BlogModel = model("blog", BlogSchema);

module.exports = { BlogModel };
