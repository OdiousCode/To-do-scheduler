let AddToDoButton = document.getElementById('addTodo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


AddToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
});

