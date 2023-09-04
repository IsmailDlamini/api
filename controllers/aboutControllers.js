import asyncHandler from "express-async-handler";

import About from "../Models/AboutModel";

// GET THE ABOUT DATA FROM THE DATABASE

export const getABout = asyncHandler(async (req, res) => {
  try {
    const aboutData = await About.find({});
    res.status(200).json(aboutData);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// UPDATE THE ABOUT DATA INSIDE THE DATABASE

export const updateAbout = asyncHandler(async (req, res) => {
  const updateField = req.body;
  const { id } = req.params;

  try {
    const aboutData = await About.findByIdAndUpdate(id, updateField);
    res.status(200).json(aboutData);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
