import mongoose, { Schema, model, models } from "mongoose";

const CompetencySchema = new Schema(
  {
    label: { type: String, required: true },
    level: { type: String, required: true },
  },
  { _id: false }
);

const SkillSchema = new Schema(
  {
    title: { type: String, required: true },
    competencies: [CompetencySchema],
  },
  { _id: false }
);

const LanguageSchema = new Schema(
  {
    language: { type: String, required: true },
    level: { type: String, required: true },
  },
  { _id: false }
);

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    liveDemoLink: String,
    githubLink: String,
    iconName: String,
  },
  { _id: false }
);

const TimelineSchema = new Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    organization: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const ContactSchema = new Schema(
  {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
  },
  { _id: false }
);

const ProfileSchema = new Schema(
  {
    aboutMe: [String],
    skills: [SkillSchema],
    languages: [LanguageSchema],
    projects: [ProjectSchema],
    timeline: [TimelineSchema],
    contact: ContactSchema,
  },
  {
    timestamps: true,
  }
);

const Profile = models.Profile || model("Profile", ProfileSchema);

export default Profile;
