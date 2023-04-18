const fs = require("fs");

const getNotes = function () {
    return "Your notes...";
};

const addNote = function (title, body) {
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

const saveNotes = function (notes) {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = function () {
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
};
