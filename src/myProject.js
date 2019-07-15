function Game(){
    var MAX_NUMBER = 8;
    var randomNumber = Math.floor( Math.random()  * MAX_NUMBER );
    document.getElementById("Start").nodeValue;
    var x = prompt("Enter number from 1-9  ")

if (x==randomNumber){
        alert("My congratilations, you win!");
 } else if (x>9){
    alert("You violated the rules of the game, you lost");
 } else{
        alert("You lose");
    }

}

