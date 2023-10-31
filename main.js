const textInputField=document.querySelector('#text-input-field');
const addButton=document.querySelector('#add-button');
const todosContainer=document.querySelector('.todos-container');


addButton.addEventListener('click',()=>{
    if(textInputField.value.trim().length=='')
    return;

    const todoItemContainer=document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');
    todosContainer.appendChild(todoItemContainer);

const todoText=document.createElement('p');
todoText.id='todo-text';
todoText.innerText=textInputField.value;
todoItemContainer.appendChild(todoText);


const editButton=document.createElement('button');
editButton.id='edit-button';
editButton.innerText='EDIT';
todoItemContainer.appendChild(editButton);


editButton.addEventListener('click',()=>{
    textInputField.value=todoText.innerText;
    const parent=editButton.parentElement;
    parent.parentElement.removeChild(parent);
});

const deletButton=document.createElement('button');
deletButton.id='delet-button'
deletButton.innerText='DELET';
todoItemContainer.appendChild(deletButton);

deletButton.addEventListener("click",()=>{
    const parent=deletButton.parentElement;
    parent.parentElement.removeChild(parent);
});

textInputField.value="";
})

