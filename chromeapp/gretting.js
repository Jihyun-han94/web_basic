const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS,text);
}

  //원래 enter를 누르면 이름이 사라짐 (default값)!
function handleSubmit(event){
  event.preventDefault();
  const currentValue =  input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

  function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);//form을 숨김
  greeting.classList.add(SHOWING_CN); //greeting을 보이게함
  greeting.innerText = `Hello ${text}`;
} 

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) { //유저 없을때 작동
    askForName();
  } else { //유저 있을 때 작동
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

