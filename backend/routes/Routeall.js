const express = require("express");
const { Contact, Experience, Project } = require("../models/Model"); // Assuming all models are exported from Model.js
const router = express.Router();

/* ------------------------- CONTACT ROUTES ------------------------- */

// POST: Submit Contact Form
router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message Sent Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});

// GET: Fetch All Contact Messages
// router.get("/contact", async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     res.status(200).json({ success: true, data: contacts });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server Error", error });
//   }
// });

router.get("/contact", async (req, res) => {
  console.log("GET /contact route hit"); // ✅ Log when the route is accessed

  try {
    const contacts = await Contact.find();
    console.log(`Fetched ${contacts.length} contacts`); // ✅ Log how many records fetched
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error.message); // ✅ Log the error message
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});


// DELETE: Delete Contact Message by Email
router.delete("/contact/email/:email", async (req, res) => {
  try {
    const deleted = await Contact.findOneAndDelete({ email: req.params.email });
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }
    res.status(200).json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});


/* ------------------------- EXPERIENCE ROUTES ------------------------- */

// CREATE Experience
router.post("/experience", async (req, res) => {
  try {
    const exp = new Experience(req.body);
    await exp.save();
    res.status(201).json({ success: true, data: exp });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// READ All Experiences
// router.get("/experience", async (req, res) => {
//   try {
//     const experiences = await Experience.find();
//     res.json({ success: true, data: experiences });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });
router.get("/experience", async (req, res) => {
  console.log("GET /experience route hit"); // 👈 log to check server

  try {
    const experiences = await Experience.find();
    console.log("Experiences fetched successfully"); // 👈 log after DB fetch
    res.json({ success: true, data: experiences });
  } catch (err) {
    console.error("Error fetching experiences:", err); // 👈 log error
    res.status(500).json({ success: false, error: err.message });
  }
});


// UPDATE Experience by Company Name
router.put("/experience/company/:company", async (req, res) => {
  try {
    // Find experience by company name and update it
    const updated = await Experience.findOneAndUpdate(
      { company: req.params.company }, // Match by company name
      req.body, // New data
      { new: true } // Return the updated document
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// DELETE Experience by Company Name
router.delete("/experience/company/:company", async (req, res) => {
  try {
    // Find experience by company name and delete it
    const deleted = await Experience.findOneAndDelete({ company: req.params.company });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


/* ------------------------- PROJECT ROUTES ------------------------- */

// CREATE Project
router.post("/project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// READ All Projects
// router.get("/project", async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json({ success: true, data: projects });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

router.get("/project", async (req, res) => {
  console.log("GET /project route hit"); // ✅ Log when route is accessed

  try {
    const projects = await Project.find();
    console.log("Projects fetched successfully:", projects.length); // ✅ Log count
    res.json({ success: true, data: projects });
  } catch (err) {
    console.error("Error fetching projects:", err.message); // ✅ Log error
    res.status(500).json({ success: false, error: err.message });
  }
});


// UPDATE Project by Title
router.put("/project/title/:title", async (req, res) => {
  try {
    const updated = await Project.findOneAndUpdate(
      { title: req.params.title }, // Find by title
      req.body, // Data to update
      { new: true } // Return the updated document
    );
    
    if (!updated) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});



// Delete Project by Title
router.delete("/project/title/:title", async (req, res) => {
  try {
    const deleted = await Project.findOneAndDelete({ title: req.params.title });  // Find and delete by title

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


module.exports = router;
