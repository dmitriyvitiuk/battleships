var i = 0;
while (i<9){
    i++;
    document.getElementById("game").innerHTML+='<div class="block"></div>';
}
var hod = 0;
document.getElementById("game").onclick = function(event){
    console.log(event)
    if (event.target.className = 'block'){
        if (hod%2 == 0){
            event.target.innerHTML = "X"
        }else{
       event.target.innerHTML = "O"
        }
    hod++;
        checkWinner();
    }
}
function checkWinner(){
    var allblock = document.getElementsByClassName('block');
    console.log(allblock)
    if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X'){ 
        console.log("Победили Хрестики")  
    }
    if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X'){
        console.log("Победили Хрестики")  
    }
    if (allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X'){
        console.log("Победили Хрестики")  
    }
    if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X'){
        console.log("Победили Хрестики")  
    }
    if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X'){
        console.log("Победили Хрестики")
    }  
    if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X'){
        console.log("Победили Хрестики")
}
}
