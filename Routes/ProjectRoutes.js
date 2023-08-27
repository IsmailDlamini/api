import express from "express";
import asyncHandler from "express-async-handler";
import Project from "../Models/ProjectModel.js";

const projectRoute = express.Router();

// PROJECT INFORMATION ROUTE

projectRoute.get(
  "/Projects",
  asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
  })
);


export default projectRoute