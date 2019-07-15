function myFunction1(){
 var arr1 = ["water", "fire", "ice" ]
    console.log("---------------------")
    console.log( "Initial arr = " + arr1 )
 var b1 = arr1.pop()
    console.log( "result of POP arr = " + arr1 )
    console.log( "b =  " + b1 )
}

function myFunction2(){
 var arr2 = ["water", "fire", "ice" ]
    console.log("---------------------")
    console.log( "Initial arr = " + arr2 )
    arr2.push("Apple")
    arr2.push("banana")
    console.log( "result of Push arr = " + arr2 )
    console.log( "b =  " + arr2[ arr2.length - 2 ] )
}

function myFunction3(){
 var arr3 = ["water", "fire", "ice" ]
    console.log("---------------------")   
    console.log( "Initial arr = " + arr3 )
 var b3 = arr3.shift()
    console.log( "result of SHIFT arr = " + arr3 )
    console.log( "b =  " + b3 )      
}

function myFunction4(){
 var arr4 = ["water", "fire", "ice" ]
    console.log("---------------------")       
    console.log( "Initial arr = " + arr4 )
    arr4.unshift("Lemon")
    console.log( "result of UNSHIFT arr = " + arr4 )
    console.log( "b =  " + arr4[0] )          
}