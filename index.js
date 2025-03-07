function receivesAFunction(greet){
   greet()
}

function greet(greeting = "Hello"){
console.log(greeting)
}

function returnsANamedFunction(){
    return function greet(greeting = "Hello"){
        console.log(greeting)
        }
}


function returnsAnAnonymousFunction(){
    return function (){
        console.log("my name is")
    } 
}


