let buffer = '0';
let screen = document.querySelector('.display')

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    rerender();
}
function handleNumber(number){
    if(buffer === '0'){
        buffer = number
    }
    else{
        buffer += number
    }
    console.log(buffer)
}
function handleSymbol(symbol){
    
}
function init(){
    console.log('teste')
    document
    .querySelector(".calc-buttons")
    .addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    })
}
function rerender(){
    screen.innerText = buffer;
}
init(); 