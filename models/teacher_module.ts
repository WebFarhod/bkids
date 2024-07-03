import mongoose, { Document, Schema } from "mongoose";

interface TeacherSocials {
  name?: string;
  link?: string;
}

const TeacherSocialsSchema = new Schema<TeacherSocials>({
  name: { type: String, required: false },
  link: { type: String, required: false },
});

interface TeacherSkills {
  name?: string;
  percent?: string;
}

const TeacherSkillsSchema = new Schema<TeacherSkills>({
  name: { type: String, required: false },
  percent: { type: String, required: false },
});

interface TeacherInfo {
  name?: string;
  info?: string;
}

const TeacherInfoSchema = new Schema<TeacherInfo>({
  name: { type: String, required: false },
  info: { type: String, required: false },
});

interface Teacher extends Document {
  image?: string;
  name: string;
  surname: string;
  rank: string;
  description: string;
  socials: TeacherSocials[];
  skills: TeacherSkills[];
  infos: TeacherInfo[];
}

const TeacherSchema = new Schema<Teacher>(
  {
    image: { type: String, required: false },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    rank: { type: String, required: true },
    description: { type: String, required: true },
    socials: { type: [TeacherSocialsSchema], required: false },
    skills: { type: [TeacherSkillsSchema], required: false },
    infos: { type: [TeacherInfoSchema], required: false },
  },
  { timestamps: true }
);

const TeacherModel = mongoose.model<Teacher>("Teacher", TeacherSchema);

export default TeacherModel;
