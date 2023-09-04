import Languages from "../Models/LanguageModel";
import asyncHandler from "express-async-handler";

// FIND AND RETURN ALL THE LANGUAGES IN THE DATABASE

export const getLanguages = asyncHandler(async (req, res) => {
  try {
    const languages = await Languages.find({});
    res.status(200).json(languages);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// ADD A NEW LANGUAGE TO THE DATABASE

export const addLanguage = asyncHandler(async (req, res) => {
  const newLanguage = req.body;

  try {
    const language = await Languages.create(newLanguage);
    res.status(200).json(language);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// UPDATE A LANGUAGE FROM THE DATABASE

export const updateLanguage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateField = req.body;

  try {
    const language = await Languages.findByIdAndUpdate(id, updateField);

    if (!language) {
      res.status(500);
      throw new Error(`language with id : ${id} not found.`);
    }

    res.status(200).json(language);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// DELETE A LANGUAGE FROM THE DATABASE

export const deleteLanguage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const language = await Languages.findByIdAndDelete(id);

    if (!language) {
      res.status(500);
      throw new Error(`language with id : ${id} not found.`);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
