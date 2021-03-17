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


    element.addEventListener('change', function () {
        if (element.lastChild.value == this.value) {
            for (let year = this.value -1 ; year > this.value -11; year--){
                let option = document.createElement('option');
                option.value = year;
                option.innerText = year;
                element.appendChild(option);
            }
        }
    });
    }   
