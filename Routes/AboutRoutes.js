import express from "express";
import asyncHandler from "express-async-handler";
import About from "../Models/AboutModel.js";
import Languages from "../Models/LanguageModel.js";
import Contact from "../Models/ContactModel.js";

const AboutRoutes = express.Router();

//LANGUAGES ROUTE

AboutRoutes.get(
  "/Languages",
  asyncHandler(async (req, res) => {
    const languagesData = await Languages.find({});
    res.json(languagesData);
  })
);

// INTRODUCTION ROUTE

AboutRoutes.get(
  "/Intro",
  asyncHandler(async (req, res) => {
    const introductionData = await About.find({});
    res.json(introductionData);
  })
);

// CONTACT ROUTE

AboutRoutes.get(
  "/Contact",
  asyncHandler(
    async (req, res) =>{
      const contactData = await Contact.find({});
      res.json(contactData)
    }
  )
)

export default AboutRoutes;
