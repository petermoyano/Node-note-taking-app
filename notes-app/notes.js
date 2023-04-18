const fs = require("fs");

const getNotes = () => {
    return "Your notes...";
};

const addNote = (title, body) => {
    try {
        const notes = loadNotes();
        // notes.forEach((note) => {
        //     if (note.title === title) throw new Error("Title already in use");
        // });
        const duplicateNotes = notes.filter((note) => title === note.title);
        if (duplicateNotes.length > 0) throw new Error("Title already in use");

        notes.push({ title, body });
        saveNotes(notes);
        console.log("New note added!");
    } catch (error) {
        console.log("Error", error);
    }
};
const removeNote = (title) => {
    try {
        const notes = loadNotes();
        const notesToKeep = notes.filter((note) => title !== note.title);

        if (notesToKeep.length === notes.length)
            throw new Error(`Note with title '${title}' not found`);

        saveNotes(notesToKeep);
        console.log("note was removed!");
    } catch (error) {
        console.log("Error", error);
    }
};

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        console.log(error);
        return [];
    }
};
module.exports = {
    getNotes,
    addNote,
    removeNote,
};
