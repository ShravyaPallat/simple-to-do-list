const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!"); // Alert if the input box is empty
    } else {
        let li = document.createElement("li"); // Create a new list item
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); // Create a span for the delete button
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box
    saveData(); // Save the current list to localStorage
}

// Event listener to handle clicks on list items or the delete button
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the checked class
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task
        saveData();
    }
}, false);

// Function to save the list to localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
//Function to display the saved list
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();