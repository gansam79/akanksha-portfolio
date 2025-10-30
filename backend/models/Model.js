const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String  },
  startDate: { type: String },
  endDate: { type: String },
  exp: { type: String },
  description: { type: String },
});

const projectSchema = new mongoose.Schema({
  ico: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  git: { type: String },
  host: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);
const Experience = mongoose.model("Experience", experienceSchema);
const Project = mongoose.model("Project", projectSchema);

module.exports = { Contact, Experience, Project };
