

    var GAME_ZONE_WIDTH = 9;
    var GAME_ZONE_HIGHT = 9;
    



    var randomNumber = Math.floor( Math.random()  * 1 );
        console.log( "randomNumber = " + randomNumber);
    var shipLocation = [randomNumber, randomNumber+1, randomNumber+2]
        console.log( "shipLocation = " + shipLocation );
    


        function redraw(){
            context = document.getElementById('canvasInAPerfectWorld').getContext("2d");
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
            
            
            context.beginPath();
            
            context.moveTo(0, 0);
            context.lineTo(100, 150);
            context.lineTo(200, 0);
            context.lineTo(300, 150);
            context.lineTo(400, 0);
            context.lineTo(500, 150);
            context.lineTo(600, 00);
            
            
            context.moveTo(300, 75);
            context.arc(300, 75, 30, 0, 2 * Math.PI);
            context.rect(290, 65, 20, 20);

            context.moveTo(0,0);
            context.lineTo(600, 00);
            context.moveTo(100, 75);
            context.arc(100, 75, 30, 0, 2 * Math.PI);
            context.rect(90, 65, 20, 20);

            context.moveTo(500, 75);
            context.arc(500, 75, 30, 0, 2 * Math.PI);
            context.rect(490, 65, 20 ,20);

            context.moveTo(100, 150) ; 
            context.lineTo(500, 150);
            context.moveTo(100, 150);
            context.lineTo(200, 300);
            context.lineTo(300, 150);
            context.moveTo(200, 300);
            context.lineTo(400,300);
            context.moveTo(300, 150);
            context.lineTo(400,300);
            context.lineTo(500,150);
            context.moveTo(200,300);
            context.lineTo(300,450);
            context.lineTo(400,300);

            context.moveTo(200, 75);
            context.arc(200, 75, 30, 0, 2 * Math.PI);
            context.rect(190, 65, 20, 20);

            context.moveTo(400,75);
            context.arc(400, 75, 30, 0, 2 * Math.PI);
            context.rect(390, 65, 20, 20);

            context.moveTo(200, 225);
            context.arc(200, 225, 30, 0, 2 * Math.PI);
            context.rect(190, 215, 20, 20);

            context.moveTo(400, 225);
            context.arc(400,225, 30, 0, 2 * Math.PI);
            context.rect(390, 215, 20, 20);

            context.moveTo(300, 225);
            context.arc(300,225, 30, 0, 2 * Math.PI);
            context.rect(290, 215, 20, 20);

            context.moveTo(300, 375);
            context.arc(300,375, 30, 0, 2 * Math.PI);
            context.rect(290, 365, 20, 20);
            context.strokeStyle = "white";

            

            context.stroke();
          }
                    redraw()