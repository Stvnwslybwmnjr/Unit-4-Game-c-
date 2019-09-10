$(document).ready(function () {
    console.log("ready!");

    let goal = Math.floor(Math.random() * 101 + 19);
    console.log("goal " + goal);

    $("#goal").text(goal);

    let button1 = Math.floor(Math.random() * 11 + 1);
    console.log("b1 " + button1);
    let button2 = Math.floor(Math.random() * 11 + 1);
    let button3 = Math.floor(Math.random() * 11 + 1);
    let button4 = Math.floor(Math.random() * 11 + 1);

    console.log("b2 " + button2);
    console.log("b3 " + button3);
    console.log("b4 " + button4);

    let sum = 0;
    let wins = 0;
    let loses = 0;
    var displaywins = $("#wins");
    var displayloses = $("#loses");
    var displaysum = $("#sum");
    
    displaywins.text(wins);
    displayloses.text(loses);
    
    function reset() {
        goal = Math.floor(Math.random() * 101 + 19);
        button1 = Math.floor(Math.random() * 11 + 1);
        button2 = Math.floor(Math.random() * 11 + 1);
        button3 = Math.floor(Math.random() * 11 + 1);
        button4 = Math.floor(Math.random() * 11 + 1);
        let sum = 0;
        displaysum.text(sum);
        $("#goal").text(goal);
        
    }
    
    $(".btn1").on("click", function () {
        sum = sum + button1;
        displaysum.text(sum);
        console.log(button1);
        if (sum == goal) {
            alert("you won");
            reset();
        }
        else if (sum > goal) {
            alert("you lost");
            reset();
        };
       
    });

    $(".btn2").on("click", function () {
        sum = sum + button2;
        displaysum.text(sum);
        console.log(button2);
        if (sum == goal) {
            alert("you won");
            reset();
        }
        else if (sum > goal) {
            alert("you lost");
            reset();
        };
       
    });

    $(".btn3").on("click", function () {
        sum = sum + button3;
        displaysum.text(sum);
        console.log(button3);
        if (sum == goal) {
            alert("you won");
            reset();
        }
        else if (sum > goal) {
            alert("you lost");
            reset();
        };
        
    });

    $(".btn4").on("click", function () {
        sum = sum + button4;
        displaysum.text(sum)
        console.log(button4);
        if (sum == goal) {
            alert("you won");
            reset();
        }
        else if (sum > goal) {
            alert("you lost");
            reset();
        }
       

    })

    console.log("endgame " + sum)
    console.log("endgame " + goal)
    // if (sum == goal) {
    //     alert("you won");
    // }
    // else if (sum > goal)
    //     alert("you lost");
});

