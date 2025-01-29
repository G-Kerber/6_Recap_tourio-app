import mongoose from "mongoose";
import "./Comments";

const { Schema } = mongoose;
const placesSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String },
  mapURL: { type: String },
  description: { type: String, required: true },
  comments: { type: [Schema.Types.ObjectId], ref: "Comment" },
});

const Places = mongoose.models.Places || mongoose.model("Places", placesSchema);

export default Places;
