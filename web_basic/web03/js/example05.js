//&lt;input type ="text"&lt;로 특수 문자 입력이 있는지 확인하기(input) @,$,%,# 특수 문자 입력이 발생하면 테두리를 붉게 변경


function containsChars(input,chars){
    
    for(var inx =0 ; inx<input.value.length ; inx++){
        if(chars.indexOf(input.value.charAt(inx)) != -1){
            console.log("error");
            input.style.border = "3px solid red"

            
    }else{  
            console.log("good");
    }
    }
}