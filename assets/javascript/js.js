$(document).ready(function () {
    console.log("ready!");

// ================Variables=======================

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

    let applause = new Audio('./assets/audio/applause.mp3');
    let foghorn = new Audio('./assets/audio/foghorn.mp3');

    displaywins.text(wins);
    displayloses.text(loses);

    // ===================RESET FUNCTION========================
    
    function reset() {
        goal = Math.floor(Math.random() * 101 + 19);
        button1 = Math.floor(Math.random() * 11 + 1);
        button2 = Math.floor(Math.random() * 11 + 1);
        button3 = Math.floor(Math.random() * 11 + 1);
        button4 = Math.floor(Math.random() * 11 + 1);
        sum = 0;
        displaysum.text(sum);
        $("#goal").text(goal);
        
    }
    // ===============Win Lose Functions======================

    function won(){
        alert("You Won!");
            reset();
            wins++;
            $("#wins").text(wins);
            applause.play();
    }

    function lost(){
        alert("Can't win em' all!");
        reset();
        loses++;
        $("#loses").text(loses)
        foghorn.play();
    }
// ====================== Buttons==============================

    $(".btn1").on("click", function () {
        sum += button1;
        displaysum.text(sum);
        console.log(button1);
        if (sum == goal) {
            won();
        }
        else if (sum > goal) {
            lost();
        };
       
    });

    $(".btn2").on("click", function () {
        sum += button2;
        displaysum.text(sum);
        console.log(button2);
        if (sum == goal) {
            won();
        }
        else if (sum > goal) {
            lost();
        };
       
    });

    $(".btn3").on("click", function () {
        sum += button3;
        displaysum.text(sum);
        console.log(button3);
        if (sum == goal) {
           won();
        }
        else if (sum > goal) {
            lost();
        };
        
    });

    $(".btn4").on("click", function () {
        sum += button4;
        displaysum.text(sum)
        console.log(button4);
        if (sum == goal) {
            won();
        }
        else if (sum > goal) {
            lost();
        }
       

    })

    // ================= END GAME==================

/*I was trying to return the sum from the on.click functions and have a win/lose conditional at the end here 
but I couldn't get it to work so i just threw the conditional into the click functions*/
    console.log("endgame " + sum)
    console.log("endgame " + goal)
    // if (sum == goal) {
    //     alert("you won");
    // }
    // else if (sum > goal)
    //     alert("you lost");
});

