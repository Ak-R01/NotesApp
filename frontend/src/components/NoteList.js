import React from "react"
import axios from "axios"

export default function NoteList({ notes, onUpdate, setEditNote }) {
    const deleteNote = async (id) => {
        await axios.delete(`http://localhost:5000/api/notes/${id}`)
        onUpdate()
    }

    return (
        <div>
            {notes.map((note) => (
                <div className="note" key={note._id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <div className="note-buttons">
                        <button
                            onClick={() => deleteNote(note._id)}
                            className="delete-btn"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => setEditNote(note)}
                            className="edit-btn"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
