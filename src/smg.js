function FF1(){
    var a = document.getElementById("in_1").value;
    var b = document.getElementById("in_2").value;
    var c;
    document.getElementById("but1");
    c = Number(a) + Number(b);
alert(c); 
}  

function FF2(){
    var A = document.getElementById("in_1").value;
    var B = document.getElementById("in_2").value;
    var C;
    document.getElementById("but2");
    C = Number(A) - Number(B);
alert(C);
}

function FF3(){
    var A1 = document.getElementById("in_1").value;
    var B1 = document.getElementById("in_2").value;
    var C1;
    if (B1 == 0){
        alert("Error");
    }else{
    document.getElementById("but3");
    C1 = Number(A1) / Number(B1);
alert(C1);
    }
}

function FF4(){
    var A2 = document.getElementById("in_1").value;
    var B2 = document.getElementById("in_2").value;
    var C2;
    document.getElementById("but4");
    C2 = Number(A2) * Number(B2);
alert(C2);
}

function FF5(){
    var A3 = document.getElementById("in_1").value;
    var B3 = document.getElementById("in_2").value;
    var C3;
    document.getElementById("but5");
    C3 = (Number(A3) * Number(B3)) / (Number(A3) + Number(B3));
alert(C3);
}

function FF6(){
    var A4 = document.getElementById("in_1").value;
    var B4 = document.getElementById("in_2").value;
    var C4;
    document.getElementById("but5");
    C4 = (Number(A4) + Number(B4)) * (Number(A4) + Number(B4));
alert(C4);
}

function FF7(){
    var A5 = document.getElementById("in_1").value;
    var B5 = document.getElementById("in_2").value;
    var C5;
    document.getElementById("but5");
    C5 = (Number(A5) - Number(B5)) * (Number(A5) - Number(B5));
alert(C5);
}
