import express from "express";
import {
  addLanguage,
  deleteLanguage,
  getLanguages,
  updateLanguage,
} from "../controllers/languageController";

const languageRoute = express.Router();

languageRoute.get("/", getLanguages);  // GET ALL LANGUAGES FROM DATABASE

languageRoute.post("/", addLanguage);  // ADD A NEW LANGUAGE TO THE DATABASE

languageRoute.delete("/:id", deleteLanguage);  // DELETE A LANGUAGE FROM THE DATABASE

languageRoute.put("/:", updateLanguage);  // UPDATE A LANGUAGE FROM THE DATABASE

export default languageRoute
