const toDoform= document.querySelector(".js-toDoForm");
const toDoinput = toDoform.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode; //부모노드
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id)
    });
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // toDos array를 string으로 만들어줌(localstorage에는 string만 저장됨)
}



function paintToDo(text){
   const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML="❌";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length+1;
    span.innerText = text;
    //뭔가를 그의 father element 안에 넣는 것 !!
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    //localstorage에는 자바스크립트의 data를 저장할 수 없고, string만 저장할 수 있음
    
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value=""; //input창 초기화
}


function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        //null이 아니면 저장 해야됨 
        //다시 object로 변환해줌
        const parsedToDos = JSON.parse(loadedtoDos);
        //forEach : array를 위한 function, array 각각의 valule에 대해 뭔가를 해준다.
        parsedToDos.forEach(function(toDo) {paintToDo(toDo.text);
        });
    }    
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit)
}
init();