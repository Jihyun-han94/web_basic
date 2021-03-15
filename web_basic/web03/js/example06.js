//랜덤한 사칙연산 문제가 제시되고 제시한 문제의 답을 입력했을 때 정답/오답을 판별하게 하기.(제시된 문제는 2자리 정수까지만)

function calculator(){
    
    while(true){
    var num1 = Math.floor(Math.random()*99)+1 ;
    var num2 = Math.floor(Math.random()*99)+1 ;
    var op = Math.floor(Math.random()*4)+1;
    var question = "";
    var operator="+";

    switch(op){
        case 1 : 
        operator = "+"; break;
        case 2 :
        operator = "-"; break;
        case 3 :
        operator = "*"; break;
        case 4 :
        operator = "/"; break;
    }
    question = num1+operator+num2;
    var prom_ques = prompt(question);
    let correctanswer = eval(question);
    
    if(parseInt(prom_ques) === correctanswer){
        alert("정답입니다.");
        return false;
    }else{
        alert("틀렸습니다.");
    }
}

}