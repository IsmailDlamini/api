import express from "express";
import { getABout, updateAbout } from "../controllers/aboutControllers.js";

const AboutRoutes = express.Router();

AboutRoutes.get("/", getABout); // GET ALL ABOUT DATA FROM THE DATABASE

AboutRoutes.put("/:id", updateAbout); // UPDATE A FIELD IN THE ABOUT DOCUMENT IN THE DATABASE

export default AboutRoutes;
