import express from "express";
import { getContact, updateContact } from "../controllers/contactControllers.js";

const contactRoute = express.Router();

contactRoute.get("/", getContact); // GET ALL THE CONTACT DATA FROM THE DATABASE

contactRoute.post("/", updateContact); // UPDATE THE CONTACT INFORMATION IN THE DATABASE

export default contactRoute;
