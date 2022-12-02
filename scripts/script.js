console.log("Beginning Javascript ");


const themeButton = document.querySelector(".theme_button");
const cancelButton = document.querySelector(".cancel_button");
const textArea = document.querySelector("textarea");
const saveCancelButtons = document.querySelector(".button-2")
const newNoteButton = document.querySelector(".new_note_button")
const saveButton = document.querySelector(".save_button")
const notesList = document.querySelector(".notes-bullets")

// Makes the background colors of the sidebar, textarea container, buttons, darker and text should be updated to "Light Theme" // 
function darkTheme () {
    const aside = document.querySelector("aside");
    const buttons = document.querySelectorAll("button"); 
    aside.classList.toggle("dark-aside");
    textArea.classList.toggle("dark-textarea");
    for (let item of buttons) {
        item.classList.toggle("dark-buttons");
    }
    if(themeButton.textContent === "Dark Theme" ) {
        themeButton.textContent = "Light Theme"
    }else{
        themeButton.textContent = "Dark Theme"
    }
}

// Hides the save button, cancel button, and textarea //
function cancel () {
    saveCancelButtons.style.visibility = "hidden"
    textArea.style.visibility = "hidden"
}
// Makes the save button, cancel button, and textarea visible again //
function newNote () {
    saveCancelButtons.style.visibility = "visible";
    textArea.style.visibility = "visible";
    let treat = true 
}

function newNote1 () {
    if (treat = true) {
        textArea.value = ""
    }
}

let notesArray = [
    {title:"note one", body:"this is my first note"},
    {title:"note two", body:"this is my first note"},
]

function saveNote () {
    if (textArea.value != "" && textArea.value != "This is a placeholder" ) {
        let noteText = textArea.value
        let noteTitle = prompt("Enter note title: ")
        if (noteTitle === null || noteTitle === "") {
            return
        } else {
            notesArray.push({title: noteTitle, body: noteText});
            console.log(notesArray)
            const newListNote = document.createElement("li")
            newListNote.textContent = noteTitle
            notesList.appendChild(newListNote)


        }        
    }
}

function savedNoteEdit (event) {
    for (let note of notesArray) {
        if (i.title == event.target.textContent) {
            textArea.value = note.body;

        }
    }
}
themeButton.addEventListener('click', darkTheme);
cancelButton.addEventListener('click', cancel);
newNoteButton.addEventListener('click', newNote);
newNoteButton.addEventListener('click', newNote1);
saveButton.addEventListener('click', saveNote);
notesList.addEventListener('click', savedNoteEdit);