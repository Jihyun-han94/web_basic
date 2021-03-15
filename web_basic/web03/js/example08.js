//선택박스로 현재년에서 20년 전까지의 옵션을 생성한 후 사용자가 생성된 마지막 년도를 선택한 경우 다시 추가로 10년 전까지의 옵션을 생성하게 만들기

function generateYear(element){
    var date = new Date();
    if (element.children.length <=1){
        for(let year =  date.getFullYear(); year>=1970 ; year--){
            let option = document.createElement('option');
            option.setAttribute("value", year);
            option.innerText = year;
            element.appendChild(option);
        }
    }
}

function generateYear2(element){
    var date = new Date();
    var lastyear = element.lastChild;
    if (element.children.length <=1){
        for(let year =  date.getFullYear(); year>=1950 ; year--){
            let option = document.createElement('option');
            option.setAttribute("value", year);
            option.innerText = year;
            element.appendChild(option);
    }
    }
    
}