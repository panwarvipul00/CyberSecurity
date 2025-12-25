import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: {
    type: String,
    enum: ["cloud-security", "red-team", "vapt"],
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});
export default mongoose.models.Issue ||
  mongoose.model("Issue", IssueSchema);
