// Define listContainer globally (outside the function)
const listContainer = document.getElementById('list-container');

function addTask() {
    const inputBox = document.getElementById('input-box');
    
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}


listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {  // Delete when × is clicked
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//store the events

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =  localStorage.getItem("data")
}
showTask();