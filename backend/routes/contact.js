const express = require("express");
const Contact = require("../models/Contact.js");
const router = express.Router();

// POST: Submit Contact Form
router.post("/form", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message Sent Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});

// GET route to fetch all contact form messages
router.get("/form", async (req, res) => {
  try {
    const contacts = await Contact.find(); // Fetch all messages
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});

// DELETE: Delete a contact form message by Email
router.delete("/form/email/:email", async (req, res) => {
  try {
    const deletedContact = await Contact.findOneAndDelete({ email: req.params.email });

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Message not found for this email"
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error
    });
  }
});




module.exports = router;
