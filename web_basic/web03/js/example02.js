//<input type = "text">로 지정한 영역의 글자 크기 바꾸기 (change)

function fontSize(element,size,updown){
    switch(updown){
        case "+":
            size.value = parseInt(size.value) +1; break;
        case "-":
            size.value = parseInt(size.value) +1; break;
    }
    element.style.fontSize = size.value+"px"
}