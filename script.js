// creating local storage to store the user name 
function passvalues(){
    var name = document.getElementById("name-input").value;//get the id
    localStorage.setItem("textvalue",name);// passs in to local storage
    return false;//false

}

//go back to index page
function back(){
window.location.href = "index.html";
}

//it can show the header text have type effect
const h2 = document.querySelector('h2');
const text = `Hi, ${localStorage.getItem("textvalue")}! Here's your To-Do List`;
let i = 0;

function type() {
  if (i < text.length) {
    h2.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

type();

// Kuha ng id
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("button-addon2");
const list = document.getElementById("todo-list");

//function sa add
function addTask() {
  if (!input.value) {
    return;
  }
  // Create a new list item element with Label in front 
      const listItem = document.createElement("li");
      listItem.style.color ="#0d6efd";
      const label1 = document.createElement("label");
      label1.innerHTML = '<i class="bi bi-bullseye"> </i>';
      listItem.appendChild(label1);
      const taskText = document.createTextNode(input.value);

      listItem.appendChild(taskText);
      
      const label = document.createElement("label");
      label.textContent = "Mark as Done";
      listItem.appendChild(label);

      //Checkbox Button ------------
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("click", function() {
        if (checkbox.checked) {
          listItem.style.textDecoration = "line-through";
          listItem.style.color = "white";
          label.innerHTML = "Completed";
          label.style.transition = "color 1s ease-in-out";
          listItem.style.transition = "color 1s ease-in-out";
          label.style.color = "white";
          setTimeout(() => {
            label.style.color = "#0d6efd";
            listItem.style.color = "#0d6efd";
          }, 500);
        } else {

          listItem.style.textDecoration = "none";
          listItem.style.color = "0d6efd";
          label.style.color = "white";
          setTimeout(() => {
            label.style.color = "#0d6efd";
          }, 500);
          label.innerHTML = "Mark as Done";
        }

      });
      listItem.appendChild(checkbox);

  //Delete Button  Section
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="bi bi-trash3-fill"> </i>';
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function() {
    list.removeChild(listItem);
  };

  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);
  input.value = "";
}

// Add an event listener to the add button to add a new task
addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
});

//LightMode -------------------
function light(){

  const body = document.body;
  const h2 = document.querySelector('.task-form h2');
  const inputs = document.querySelector('.input-group-text');
  const input1 = document.querySelector('.form-control');
  const p = document.querySelector('.task-form p');
  const border = document.querySelector('.task-form');
  const button = document.querySelector('.btn');
  const bi = document.querySelector('.bi');
  const container = document.querySelector('.container3');
  const lightbtn = document.querySelector('#lightbtn');
  const darkbtn = document.querySelector('#darkbtn');
  const backbtn = document.querySelector('#backbtn');
  const li = document.querySelectorAll('li');
  const checkbox = document.querySelectorAll('.checkbox');
//transition of change color for li
for(let item of li){
  item.style.transition = 'background-color 1s ease-in-out';
  item.style.backgroundColor = 'white';
  item.style.borderTop = '1px solid #0d6efd';
  item.style.borderLeft = '1px solid #0d6efd';
  item.style.color = '#0d6efd';
}
//transition of delete btn
const deleteBtn = document.querySelectorAll('.delete-btn');
for(let item of deleteBtn){
  item.style.transition = 'background-color 1s ease-in-out';
  item.style.backgroundColor = '#0d6efd';
}
  container.style.transition = 'background-color 1s ease-in-out';
  body.style.transition = 'background-color 1s ease-in-out';
  h2.style.transition = 'color 1s ease-in-out';
  p.style.transition = 'color 1s ease-in-out';
  border.style.transition = 'border-color 1s ease-in-out';
  input1.style.transition = 'background-color 1s ease-in-out';
  input1.style.transition = 'background-color 1s ease-in-out';
  border.style.transition = 'background-color 1s ease-in-out';
  inputs.style.transition = 'background-color 1s ease-in-out';
  lightbtn.style.transition = 'background-color 1s ease-in-out';
  darkbtn.style.transition = 'background-color 1s ease-in-out';
  backbtn.style.transition = 'background-color 1s ease-in-out';
  container.style.backgroundColor = 'white';
  bi.style.transition = 'color 1s ease-in-out';
  body.style.backgroundColor = 'white';
  h2.style.color = 'black';
  p.style.color = 'black';
  bi.style.color = '#0d6efd';
  input1.style.color = 'black';
  lightbtn.style.backgroundColor='#0d6efd';
  backbtn.style.backgroundColor='#0d6efd';
  darkbtn.style.backgroundColor='#0d6efd';
  lightbtn.style.border='1px solid #0d6efd';
  backbtn.style.border='1px solid #0d6efd';
  darkbtn.style.border='1px solid #0d6efd';
  lightbtn.style.color ='white';
  border.style.borderTop = '1px solid rgb(13, 110, 253, 0.5)';
  border.style.borderLeft = '1px solid rgb(13, 110, 253, 0.5)';
  border.style.backgroundColor='white';
  inputs.style.backgroundColor = 'white';
  inputs.style.border = '1px solid #0d6efd';
  input1.style.backgroundColor = 'white';
  input1.style.border = '1px solid #0d6efd';
  input1.style.borderLeft = '1px solid rgb(13, 110, 253, 0.5)';
  button.style.backgroundColor = '#0d6efd';
  button.style.border = '1px solid rgb(13, 110, 253, 0.5)';
  button.style.borderTopRightRadius = '5px';
  button.style.borderBottomRightRadius = '5px';
  
}

//Dark Mode ----------------------
function darkmode(){
const body = document.getElementsByTagName('body')[0];
const h2 = document.querySelector('.task-form h2');
const inputs = document.querySelector('.input-group-text');
const input1 = document.querySelector('.form-control');
const p = document.querySelector('.task-form p');
const border = document.querySelector('.task-form');
const button = document.querySelector('.btn');
const bi = document.querySelector('.bi');
const container = document.querySelector('.container3');
const lightbtn = document.querySelector('#lightbtn');
const darkbtn = document.querySelector('#darkbtn');
const backbtn = document.querySelector('#backbtn');
const li = document.querySelectorAll('li');
//transition of change color for li
for(let item of li){
  item.style.transition = 'background-color 1s ease-in-out';
  item.style.backgroundColor = '#252525';
  item.style.borderTop = '1px solid white';
  item.style.borderLeft = '1px solid white';
  item.style.color = '#0d6efd';
}
//transition of delete btn
const deleteBtn = document.querySelectorAll('.delete-btn');
for(let item of deleteBtn){
  item.style.transition = 'background-color 1s ease-in-out';
  item.style.backgroundColor = 'black';
}
inputs.style.transition = 'background-color 1s ease-in-out';
  container.style.transition = 'background-color 1s ease-in-out';
  body.style.transition = 'background-color 1s ease-in-out';
  h2.style.transition = 'color 1s ease-in-out';
  p.style.transition = 'color 1s ease-in-out';
  border.style.transition = 'border-color 1s ease-in-out';
  input1.style.transition = 'background-color 1s ease-in-out';
  input1.style.transition = 'background-color 1s ease-in-out';
  border.style.transition = 'background-color 1s ease-in-out';
  lightbtn.style.transition = 'background-color 1s ease-in-out';
  darkbtn.style.transition = 'background-color 1s ease-in-out';
  backbtn.style.transition = 'background-color 1s ease-in-out';
  bi.style.transition = 'color 1s ease-in-out';
  body.style.backgroundColor = '#1c1a1a';
  container.style.backgroundColor = '#1c1a1a';
  h2.style.color = 'white';
  p.style.color = 'white';
  bi.style.color = 'white';
  lightbtn.style.backgroundColor='black';
  backbtn.style.backgroundColor='black';
  darkbtn.style.backgroundColor='black';
  lightbtn.style.border='1px solid black';
  backbtn.style.border='1px solid black';
  darkbtn.style.border='1px solid black';
  lightbtn.style.color ='white';
  border.style.borderTop = '1px solid white';
  border.style.borderLeft = '1px solid white';
  border.style.backgroundColor='#252525';
  inputs.style.backgroundColor = '#424141';
  inputs.style.border = '1px solid #424141';
  input1.style.backgroundColor = '#424141';
  input1.style.color = 'white';
  input1.style.border = '1px solid #424141';
  input1.style.borderLeft = '1px solid #212529';
  button.style.backgroundColor = '#000000';
  button.style.border = '1px solid #212529';
  button.style.borderTopRightRadius = '5px';
  button.style.borderBottomRightRadius = '5px';
  
}

const darkbtn = document.querySelector('#darkbtn');
const lightbtn = document.querySelector('#lightbtn');

darkbtn.addEventListener('click',function(){
  darkbtn.disabled = true;
  lightbtn.disabled = false;
})
lightbtn.addEventListener('click',function(){
  lightbtn.disabled = true;
  darkbtn.disabled = false;
})

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  event.returnValue = '';
});
