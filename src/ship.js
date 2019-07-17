
var block = document.getElementById("box_div");

var step = 30;
var currentX = 0;
var currentY = 0;



document.onkeydown = function (event) {
    
    if (event.key == "ArrowRight") {
        moveShip(step)
    }
    if (event.key == "ArrowLeft") {
        moveShip(-step)
    }
    if (event.code == "Space") {
        shut();
    }
}


function moveShip(newStep) {
    currentX = currentX + newStep;
    block.style.left = currentX + "px"
}

function shut()
{
    var b = createBomb();
        b.className = 'animate-bomb';
}

function createBomb() {
    var bomb_div = document.createElement("div");
    var bomb_img = document.createElement("img");
        bomb_img.setAttribute('src', 'bomb.png');
        bomb_img.setAttribute('height', '30px');
        bomb_img.setAttribute('width', '30px');
        bomb_div.appendChild(bomb_img);
        block.appendChild(bomb_div);
      


        return bomb_div;
}
moveShip(document.body.clientWidth / 2 - block.clientWidth / 2)