const elemTodoForm = document.querySelector('#todoForm');
const elemUl = document.querySelector('.todoUl');
const elemH2 = document.querySelector('h2');
const elemClose = document.querySelector('.todo>button');
const TODO_KEY = 'TODOS';
let arrTodo = [];  //id,value
/*
    arrTodo = [{id:id,value:value},{id:id,value:value}.....]
*/

const saveLocalStorage = () => {
    const txt = JSON.stringify(arrTodo);
    localStorage.setItem(TODO_KEY,txt);
}
const readLocalStorage = () => {
    const read = localStorage.getItem(TODO_KEY);
    if( read ) {
        const obj = JSON.parse(read);
        obj.forEach( (value) => {
            addTodoList(value.id, value.txt );
        });
    }    
}
const saveTodos = (id, txt) => {    
    const obj = {
        id, // id : id,
        txt , //txt : txt ,
    };
    arrTodo.push(obj);
}
const onEventTodoDel = (event) => {
    const obj = event.target.parentElement;  //li
    obj.remove();
    arrTodo = arrTodo.filter( (value) => {
        return value.id != obj.id;
    } );
    // console.log( arrTodo );
    saveLocalStorage();
}
const addTodoList = (id, txt)=>{    
    const btn =document.createElement('button');
    btn.textContent = 'x';
    btn.addEventListener('click',onEventTodoDel);
    const span = document.createElement('span');
    span.textContent = txt;
    const li = document.createElement('li');  //<li></li>
    li.appendChild(btn);
    li.appendChild(span);
    li.id = id; //<li id="1234567"></li>
    elemUl.appendChild(li);
    saveTodos(id , txt);
}
const onEventFormSubmit = (event) => {
    event.preventDefault();   
    const elemInput = elemTodoForm.querySelector('input');    
    const txt =elemInput.value;
    elemInput.value = '';
    addTodoList( Date.now() , txt ); 
    saveLocalStorage();
}
const ovClickTodo = ()=> {
    const obj = document.querySelector('.todo');
    obj.classList.toggle('cls-view');
}
const todos_init = () => {
    readLocalStorage();
    elemTodoForm.addEventListener('submit',onEventFormSubmit);  
    elemH2.addEventListener('click',ovClickTodo);
    elemClose.addEventListener('click',ovClickTodo);
}
todos_init();