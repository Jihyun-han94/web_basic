function changeColor(element, color){

    switch(color){
        case 'red' :
            color = 'red'; break;
        case 'yellow' :
            color = 'yellow'; break;
    }
    element.style.backgroundColor = color;
}