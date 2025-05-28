const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function updateStorage() {
  const notes = [...document.querySelectorAll(".input-box")].map(note =>
    note.innerText.trim()
  );
  localStorage.setItem("notes", JSON.stringify(notes));
}

function showNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
  savedNotes.forEach(text => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = text;
    img.src = "https://cdn-icons-png.freepik.com/512/6564/6564678.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
  });
}
showNotes();

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "https://cdn-icons-png.freepik.com/512/6564/6564678.png";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      e.target.parentElement.remove();
      updateStorage();
    }
  } else if (e.target.classList.contains("input-box")) {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.shiftKey) {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
