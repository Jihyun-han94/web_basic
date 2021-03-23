const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){

    const image = new Image();
    image.src = `image/${imgNumber+1}.jpg`;
    // css에 활용하기 위해 클래스 지정
    image.classList.add("bgImage");
    // appendChild()와 성능은 유사하나 prepend는 맨앞에다가 추가하는 것
    body.prepend(image);
    //body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();