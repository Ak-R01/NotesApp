import React, { useEffect, useState } from "react"
import axios from "axios"
import NoteForm from "./components/NoteForm"
import NoteList from "./components/NoteList"
import "./App.css"

function App() {
    const [notes, setNotes] = useState([])
    const [editNote, setEditNote] = useState(null) 

    const fetchNotes = async () => {
        const res = await axios.get("http://localhost:5000/api/notes")
        setNotes(res.data)
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div className="App">
            <h1>My Notes</h1>
            <NoteForm
                onAdd={fetchNotes}
                editNote={editNote}
                setEditNote={setEditNote}
            />
            <NoteList
                notes={notes}
                onUpdate={fetchNotes}
                setEditNote={setEditNote}
            />
        </div>
    )
}

export default App
