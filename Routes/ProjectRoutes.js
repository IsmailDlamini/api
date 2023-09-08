import express from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../controllers/projectControllers.js";


const projectRoute = express.Router();

projectRoute.get("/", getProjects); // GET ALL PROJECTS FROM THE DATABASE

projectRoute.delete("/:id", deleteProject); //DELETE A PROJECT FROM THE DATABASE

projectRoute.post("/", createProject); // CREATE A NEW PROJECT INSIDE THE DATABASE

projectRoute.put("/:id", updateProject); // UPDATE THE DATA OF A CERTAIN PROJECT IN THE DATABASE

export default projectRoute;
