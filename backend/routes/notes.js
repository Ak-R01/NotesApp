const express = require("express")
const router = express.Router()
const Note = require("../models/Note")

// Get all notes
router.get("/", async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
})

// Add a new note
router.post("/", async (req, res) => {
    const { title, content } = req.body
    const newNote = new Note({ title, content })
    await newNote.save()
    res.json(newNote)
})

// Update a note
router.put("/:id", async (req, res) => {
    const { title, content } = req.body
    const updated = await Note.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true }
    )
    res.json(updated)
})

// Delete a note
router.delete("/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({ message: "Note deleted" })
})

module.exports = router
