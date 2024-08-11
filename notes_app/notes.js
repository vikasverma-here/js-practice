// const button = document.getElementById('btn')
// const inputBox = document.getElementsByClassName('input-box')
// const notesContainer = document.getElementById('notes-container')

// function shownotes (){
//     notesContainer.innerHTML=localStorage.getItem('notes')
// }
// shownotes ()
// function updateStoreage (){

//     localStorage.setItem("inputBox" , notesContainer.innerHTML)
// }

//    button.addEventListener("click",()=>{
//     let input = document.createElement("p");
//     let img = document.createElement("img")
//     input.className = 'input-box';
//     input.setAttribute("contenteditable" , "true");
//     img.src="images/delete.png"
//     img.id='newImg'
//     notesContainer.appendChild(input).appendChild(img)

    
    
// })

// notesContainer.addEventListener("click", function(e){
//     if(e.target.id=='newImg'){
//         e.target.parentElement.remove()
//         updateStoreage ()
//     }
//     else if(e.target.className === 'input-box'){
//         notes = document.querySelectorAll('.input-box')
//         notes.forEach(nt => {nt.onkeyup=function(){
//             updateStoreage ()
//         }})
//     }
// })


const button = document.getElementById('btn');
const notesContainer = document.getElementById('notes-container');

// Function to show notes from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes') || ""; // Default to empty if no notes are stored
}
showNotes();

// Function to update localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add event listener to the button to add a new note
button.addEventListener("click", () => {
    let input = document.createElement("p");
    let img = document.createElement("img");
    
    input.className = 'input-box';
    input.setAttribute("contenteditable", "true");
    
    img.src = "images/delete.png";
    img.className = 'delete-img'; // Changed to className for consistency
    
    input.appendChild(img);
    notesContainer.appendChild(input);
    
    updateStorage(); // Update storage after adding a new note
});

// Event delegation for handling clicks within notesContainer
notesContainer.addEventListener("click", function(e) {
    if (e.target.className === 'delete-img') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.className === 'input-box') {
        // Adding event listener to handle keyup for all input-box elements
        e.target.addEventListener('keyup', function() {
            updateStorage();
        });
    }
});
