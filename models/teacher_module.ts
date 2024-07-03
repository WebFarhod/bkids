// models/teacher.js
import mongoose from "mongoose";
const { Schema } = mongoose;

// Define schema for Teacher
const teacherSchema = new Schema(
  {
    image: { type: String, required: false },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    rank: { type: String, required: true },
    description: { type: String, required: true },
    socials: [
      {
        name: { type: String, required: false },
        link: { type: String, required: false },
      },
    ],
    skills: [
      {
        name: { type: String, required: false },
        percent: { type: String, required: false },
      },
    ],
    infos: [
      {
        name: { type: String, required: false },
        info: { type: String, required: false },
      },
    ],
  },
  { timestamps: true }
);

// Create a model using the schema
const TeacherModel = mongoose.model("Teacher", teacherSchema);

export default TeacherModel;
