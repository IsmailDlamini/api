import asyncHandler from "express-async-handler";
import Contact from "../Models/ContactModel";

// GET THE CONTACT DATA FROM THE DATABASE

export const getContact = asyncHandler(async (req, res) => {
  try {
    const contactData = await Contact.find({});
    res.status(200).json(contactData);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// UPDATE THE CONTACT DATA FROM THE DATABASE

export const updateContact = asyncHandler(async (req, res) => {
  const newContactData = req.body;

  try {
    await Contact.deleteMany({});
    const contactData = await Contact.create(newContactData);

    res.status(200).json(contactData);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
