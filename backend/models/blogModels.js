const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    nameOfDish: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },

    fileUpload: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogSchema", blogSchema);
