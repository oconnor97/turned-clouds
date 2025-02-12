import Show from "../models/show.model.js";
import mongoose from "mongoose";

//get all shows function
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
//update show function
export const updateShow = async (req, res) => {
    const { id } = req.params;

    const show = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Show ID' });
    }

    try {
        //when you pass {new:true} to findByIdAndUpdate it will return the new changed object, defaults to false and returns the object as it was before the change
       const updatedShow = await Show.findByIdAndUpdate(id, show,{new:true});
       res.status(200).json({ success:true, data: updatedShow});
    } catch (error) {
        res.status(500).json({ success: false, message: "server Error"});
    }
}

//delete show function
export const deleteShow = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Show ID' });
    }
    
   try {
    await Show.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Show deleted successfully'})
   }
   catch (error) {
    res.status(500).json({success: false, message: "Server Error"})
   }
}