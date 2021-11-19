console.log("Welcome to Notes App.This is Note JS file");
showNotes();

//If user adds a note to local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value = "";
  //console.log(notesObj);
  showNotes();
});
//function to show Notes from Local Storage.

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Trigger ${index + 1}</h5>
      <p class="card-text">${element}</p>
      <button id = "${index}"onclick = "deleteNodes(this.id)" class="btn btn-primary">Go to Hell</button>
    </div>
  </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.lenght != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML =
      "Nothing to show! Add a Note section above to add notes.";
  }
}

//Function to delete a Note
function deleteNodes(index) {
  // console.log("Go to trash", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  console.log("Input element fired", inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    console.log(cardTxt);
    if (cardTxt.toLowerCase().includes(inputVal)) {
      console.log("match: " + cardTxt);
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
