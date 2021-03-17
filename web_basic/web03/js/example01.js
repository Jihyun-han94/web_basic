//선택박스로 1970년 까지의 옵션 생성하기(focus)

function generateYear(element){
    
    var date = new Date();
    if (element.children.length <=1){
        for(let year = date.getFullYear(); year >= 1970 ; year--){
            //let option = document.createElement("option");
            let option = $("<option></option>");
            //option.setAttribute("value", year);
            option.attr("value",year);
            //option.innerText = year;
            option.text(year);
            //element.appendChild(option);
            $(element).append(option);
        }
    }
}


    