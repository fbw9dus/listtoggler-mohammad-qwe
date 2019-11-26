

var div = document.getElementById("select")
var list = document.querySelector(".list-group1")
function choose1() {
    
    div.textContent = "you selected " + "Rome"
}

function choose2() {
    
    div.textContent = "you selected " + "Athens"
}


function choose3() {
    
    div.textContent = "you selected " + "Amsterdam"
}


function choose4() {
  
    div.textContent = "you selected " + "Bangkok"
}



function choose5() {
    
    div.textContent = "you selected " + "Cal gonone"
}

var qwe = document.getElementById("classtoggle")
function toggleAlles(){
if(qwe.textContent=="show distinations"
){
    list.classList.toggle("list-group-hiden")
    qwe.textContent="hide distinations"
  
}
else{
    list.classList.toggle("list-group-hiden")
    qwe.textContent="show distinations"
}


}


