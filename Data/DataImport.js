import express from "express";
import ProjectData from "./ProjectData.js";
import Project from "../Models/ProjectModel.js";
import asyncHandler from "express-async-handler";
import LanguageData from "./LanguageData.js";
import Languages from "../Models/LanguageModel.js";
import AboutData from "./AboutData.js";
import About from "../Models/AboutModel.js";
import Contact from "../Models/ContactModel.js";
import ContactData from "./ContactData.js";

const ImportData = express.Router();

//IMPORT PROJECT DATA

ImportData.post(
  "/projects",
  asyncHandler(async (req, res) => {
    await Project.deleteMany({});
    const importProjects = await Project.insertMany(ProjectData);
    res.send({ importProjects });
  })
);

// IMPORT LANGUAGE DATA

ImportData.post(
  "/Languages",
  asyncHandler(async (req, res) => {
    await Languages.deleteMany({});
    const importLanguages = await Languages.insertMany(LanguageData);
    res.send({ importLanguages });
  })
);

//IMPORT INTRODUCTORY DATA

ImportData.post(
  "/Intro",
  asyncHandler(async (req, res) => {
    await About.deleteMany({});
    const importAbout = await About.insertMany(AboutData);
    res.send({ importAbout });
  })
);

//IMPORT CONTACT DATA

ImportData.post(
  "/Contact",
  asyncHandler(async (req, res) => {
    await Contact.deleteMany({});
    const importContacts = await Contact.insertMany(ContactData);
    res.send({ importContacts });
  })
);

export default ImportData;
