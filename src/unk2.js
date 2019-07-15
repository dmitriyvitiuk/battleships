function redraw(){
    context = document.getElementById('canvas').getContext("2d");
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); 
    
    
    context.beginPath();
    context.moveTo(0,0);
    context.moveTo(300,0);
    context.lineTo(0, 900);

    context.strokeStyle = "white";
    context.stroke();
 }