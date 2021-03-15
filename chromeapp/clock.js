const clockContainer = document.querySelector (".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); //객체 생성 
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //.innerText : 객체 안에 텍스트를 넣어줌 
    clockTitle.innerText= `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`; //삼항연산자 
   
}

function init(){
    getTime();
    setInterval(getTime, 1000); //1초마다 gettime함수가 실행되도록 하는 함수 => 시계처럼 작동 
}
init();