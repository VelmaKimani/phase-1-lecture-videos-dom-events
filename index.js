//Mouseover event
document.querySelector('form').addEventListener(
    'mouseover',e =>
    console.log(e)
);

//Create an alert. Button click
document.querySelector("#alert").addEventListener(
    'click', () => alert("Hi, I was clicked"));

// document.querySelector("#alert").addEventListener(
//     'click', alert("Hi, I was clicked"));

// !!! document.querySelector("#alert").addEventListener(
//     'click', alertMe);

// function alertMe(){
//    return alert("Hi, I was clicked.");
// } !!!

//Log Something
document.querySelector("#log").addEventListener(
    "click", () => console.log("I've been logged"));

//Will delete task
function handleDelete(e){
   // e.target.remove();
   e.target.parentNode.remove(); //remove parent node and all its children.
   
}

//Grabs and deletes parent node.
function addEventListenerToDeleteButtons(){
    let buttons = document.getElementsByClassName;
    ("delete_btn")
    for(let btn of buttons){
        btn.addEventListener("click", handleDelete);
    }
}
addEventListenerToDeleteButtons();