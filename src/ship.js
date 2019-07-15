
var block = document.getElementById("box");
var bomb = document.getElementById("bomb_div");
var step = 20;
var currentX = 0;
var currentY = 0;

// function ShowDiv(){
// document.getElementById("bomb_div").style.display = "block";
// }

document.onkeydown = function(event){
//console.log(event)
    if(event.key == "ArrowRight") {
        currentX = currentX + step;
        block.style.left = currentX +  "px"
    }
    if(event.key == "ArrowDown") {
        currentY = currentY + step;
        block.style.top = currentY + "px"
    }
    if(event.key == "ArrowLeft") {
        currentX -= step;
        block.style.left = currentX + "px"
    }
    if (event.key == "ArrowUp") {
        currentY -= step;
        block.style.top = currentY + 'px'
    }
    if (event.code == "Space") {
        console.log(event.key);
        bomb.className = 'animate-bomb';
        createBomb(1,1);
    }
      //console.log("["+event.key+"]" + " -> currentX = " + currentX +";  currentY = " + currentY)
    }



    function createBomb(bombX, bombY){
        var newDiv = document.createElement("div");
            newDiv.className = '';
            newDiv.innerHTML = ""
            document.body.appendChild(newDiv);
    }