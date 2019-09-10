$( document ).ready(function() {
    console.log( "ready!" );

let goal = Math.floor(Math.random()*101+19)
console.log("goal " + goal)



let button1 = Math.floor(Math.random()*11+1)
console.log("b1 " + button1);
let button2 = Math.floor(Math.random()*11+1)
let button3 = Math.floor(Math.random()*11+1)
let button4 = Math.floor(Math.random()*11+1)

console.log("b2 " + button2);
console.log("b3 " + button3);
console.log("b4 " + button4);

let wins = 0;
let loses = 0;
var displaywins = $("#wins");
var displayloses = $("loses");

displaywins.text(wins);
displayloses.text(loses);

$(".btn1").on("click", function() {
    
})

});