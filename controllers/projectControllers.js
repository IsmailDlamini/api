import asyncHandler from "express-async-handler";
import Project from "../Models/ProjectModel.js";

//GET ALL THE PROJECTS FROM THE DATABASE

export const getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//DELETE A PROJECT FROM THE DATABASE

export const deleteProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      res.status(404);
      throw new Error(`No product with id : ${id} found`);
    }

    res.status(200).json({ deleted: project });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// ADD A NEW PROJECT TO THE DATABASE

export const createProject = asyncHandler(async (req, res) => {
  const newProject = req.body;

  try {
    const project = await Project.create(newProject);
    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// UPDATE A FIELD FROM A CERTAIN DOCUMENT INSIDE THE DATABASE

export const updateProject = asyncHandler(async (req, res) => {
  const updateField = req.body;
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndUpdate(id, updateField);

    if (!project) {
      req.status(404);
      throw new Error(`No product with id : ${id} found`);
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
