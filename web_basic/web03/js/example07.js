//BMI를 계산하여 저체중/정상체중/과체중/비만/고도비만에 따라 출력 메시지의 색상을 다르게 표기하기. BMI = 체중(kg) / 신장(m)^2 (저체중 [20미만] : 빨강 , 정상 [20~24] : 노랑 ,과체중[25~29], 비만[30~34] : 주황 ,고도비만[35이상] : 검정)

// 1. 몸무게 입력 받고
// 2. BMI 계산
// 3. 메세지 색상 다르게 표기

function BMICUL(element, weight, height){
    console.log(weight);
    console.log(height);
    var h2 = parseInt(height)/100;
    console.log(h2);
    var BMI = parseInt(weight)/h2 
    console.log(BMI);
    const BMI2 = Math.floor(BMI);
    console.log(BMI2);

    if(BMI2< 20){
        element.innerText = "저체중입니다.";
        element.style.color = 'red';

    }else if(BMI2>=20 && BMI2<=24){
        element.innerText = "정상체중입니다.";
        element.style.color = 'green';
        console.log(BMI2);
    }else if(BMI2>=25 && BMI2<=29){
        element.innerText = "과체중입니다.";
        element.style.color = 'grey';
    }else if(BMI2>=30 && BMI2<=34){
        element.innerText = "비만입니다.";
        element.style.color = 'blue';
    }else if(BMI2 >=35){
        element.innerText = "고도비만입니다.";
        element.style.color = 'black';
    }else{
        element.innerText = "잘못 입력하셨습니다.";
    }
}