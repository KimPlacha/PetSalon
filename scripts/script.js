var globalVar="I'm in global scope";

function myFuntion() {
    // This function can access globalVariable console.log(globalVariable);
    console.log(globalVar);
}

myFunction();

function myFunction2() {
    var globalVar="I'm in local scope";
    // This function can access localVariable console.log(localVariable);
    console.log(localVar);
    if (true) {
        let blockVar="I'm in block scope";
        console.log(blockVar);
    // Accesing blockVar here would result in an error
    }
}

myFunction2();

function planeTickets(destination,price){
    console.log("Traveling to ... + destination");
    return price*1.11
}
function calculateProfits(){
    var price1=planeTicket("Italy,100");
    var price2=planeTicket("Amsterdam,200");
    var price3=planeTicket("Barelona,300");
    console.log 
}

