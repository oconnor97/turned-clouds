import Show from "../models/show.model.js";
import mongoose from "mongoose";

//getShow function
export const getShows = async (req, res) => {
    try {
        const shows = await Show.find({});
        res.status(200).json({ success: true, data: shows});
    } catch (error) {
        console.log('Error in fetching Shows');
        res.status(500).json({ success: true, message: "Server error"})
        
    }
}

//create Show function
export const createShow = async (req, res) => {
  const show = req.body; //the user will send this data

  if (!show.date || !show.venue || !show.setOne || !show.setTwo || !show.encore) {
    return res
      .status(400)
      .json({ sucess: false, message: "Please provide all required fields" });
  }
  const newshow = new Show(show);

  try {
    await newshow.save();
    res.status(201).json({ sucess: true, data: newshow });
  } catch (error) {
    console.error("Error in create show", error.message);
    res.status(500).json({ sucess: false, message: "Server Error" }); //use 500 because it is an internal issue
  }
};
