


    // document.getElementById('date_year').addEventListener('click', function() {
    //     let date = new Date();
    //     var selyear = document.getElementById("date_year");
    //     for (i=0 ; i<30 ; i++){
    //         let option = document.createElement("option");
    //         let year = date.getFullYear() -i;
    //         option.setAttribute("value", year);
    //         option.innerText =year;
    //         selyear.appendChild(option);
    //     }
    //     })
        
       
    function generateYear(element) {
        /**
         * 현재년도 부터 1970년 까지 선택박스 옵션을 자동 생성
         */
        let date = new Date();
        if (element.children.length <= 1) {
            for(let year = date.getFullYear(); year >= 1970; year--) {
                let option = document.createElement("option");
                option.setAttribute("value", year);
                option.innerText = year;
                element.appendChild(option)
            }
        }
    }
    
    function generateMonth(element) {
        /**
         * 1월 ~ 12월 까지 선택박스 옵션을 자동 생성
         */
        if (element.children.length <= 1) {
            for(let month = 1; month <= 12; month++) {
                let option = document.createElement("option");
                option.setAttribute("value", month);
                option.innerText = month;
                element.appendChild(option)
            }
        }
    }
    
    function generateDay(element, year, month) {
        // 만약 년도 및 월이 선택되지 않은 경우 현재 년도/월로 설정
        if (year == "년도") { year = (new Date()).getFullYear(); }
        if (month == "월") { month = (new Date()).getMonth() + 1; }
    
        // 전달 받은 년/월로 날자 데이터 생성
        // 해당 월의 마지막 일자를 쉽게 구하기 위해 일부러 다음달로 넘긴다.
        let date = new Date(year, month);
        date.setDate(date.getDate() - 1);   // 넘어간 달에서 1일을 차감하여 마지막 일자 구함.
    
        // 앞서 생성된 모든 옵션을 제거하기 위해 사용.
        for(let idx = element.children.length - 1; idx >= 1; idx--) {
            element.children[idx].remove();
        }
    
        for(let day = 1; day <= date.getDate(); day++) {
            let option = document.createElement("option");
            option.setAttribute("value", day);
            option.innerText = day;
            element.appendChild(option)
        }
    }
    
    function passwordCheck(p1, p2) {
        if (p2.parentNode.getElementsByTagName("span").length == 0) {
            var message = document.createElement("span");
            p2.parentNode.appendChild(message);
        } else {
            var message = p2.parentNode.getElementsByTagName("span")[0];
        }
    
        if (p1.value == p2.value) {
            p1.className = "form-control valid";
            p2.className = "form-control valid";
            message.className = "valid-msg";
            message.innerText = "정상적인 비밀번호 입니다.";
        } else {
            p1.className = "form-control invalid";
            p2.className = "form-control invalid";
            message.className = "invalid-msg";
            message.innerText = "비밀번호가 일치하지 않습니다.";
        }
    }
    
    function fontSize(element, size, updown) {
        switch (updown) {
            case "+":
                size.value = parseInt(size.value) + 1;    break;
            case "-":
                size.value = parseInt(size.value) - 1;    break;
        }
        element.style.fontSize = size.value + "px";
    }
    
    
    function changeColor(red, green, blue) {
        r_span = document.getElementsByClassName(red.getAttribute("for-set"))[red.getAttribute("for-set-index")];
        g_span = document.getElementsByClassName(green.getAttribute("for-set"))[green.getAttribute("for-set-index")];
        b_span = document.getElementsByClassName(blue.getAttribute("for-set"))[blue.getAttribute("for-set-index")];
    
        r_span.innerText = "R : " + red.value;
        g_span.innerText = "G : " + green.value;
        b_span.innerText = "B : " + blue.value;
    
        let color_picker = document.getElementsByClassName("color-picker")[0];
        color_picker.style.backgroundColor = "rgb(" + red.value + ", " + green.value + ", " + blue.value + ")";
    }