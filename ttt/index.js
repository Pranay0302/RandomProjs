//@ts-check

function move(event) {
    var squareId = event.target.id;
    var square = document.getElementById(squareId);
    var change0 = document.getElementById("change");
    var turn = change0.innerHTML[0];
    // console.log(squareId);
    // console.log(turn);

    if (square.innerHTML === "" && turn === "O") {
        square.innerHTML = "O";
        change0.innerHTML = "X turn";
    } else if (square.innerHTML === "" && turn === "X") {
        square.innerHTML = "X";
        change0.innerHTML = "O turn";
    }
    compare();
}

function compare() {
    var change0 = document.getElementById("change");
    var s1 = document.getElementById("square-1").innerHTML;
    var s2 = document.getElementById("square-2").innerHTML;
    var s3 = document.getElementById("square-3").innerHTML;
    var s4 = document.getElementById("square-4").innerHTML;
    var s5 = document.getElementById("square-5").innerHTML;
    var s6 = document.getElementById("square-6").innerHTML;
    var s7 = document.getElementById("square-7").innerHTML;
    var s8 = document.getElementById("square-8").innerHTML;
    var s9 = document.getElementById("square-9").innerHTML;

    // let streak = [

    //     [s1, s2, s3],
    //     [s4, s5, s6],
    //     [s7, s8, s9],
    //     [s1, s4, s7],
    //     [s2, s5, s8],
    //     [s3, s6, s9],
    //     [s1, s5, s9],
    //     [s3, s5, s7],

    // ]

    if (s1 === s2 && s2 === s3 && s3 === s1 && s1 !== "" && s2 !== "" && s3 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }
    if (s4 === s5 && s5 === s6 && s4 === s6 && s4 !== "" && s5 !== "" && s6 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }
    if (s7 === s8 && s8 === s9 && s7 === s9 && s7 !== "" && s8 !== "" && s9 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }
    if (s1 === s4 && s4 === s7 && s1 === s7 && s1 !== "" && s4 !== "" && s7 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }
    if (s2 === s5 && s5 === s8 && s2 === s8 && s2 !== "" && s5 !== "" && s8 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }
    if (s3 === s6 && s6 === s9 && s3 === s9 && s3 !== "" && s6 !== "" && s9 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }
    if (s1 === s5 && s5 === s9 && s1 === s9 && s1 !== "" && s5 !== "" && s9 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }
    if (s3 === s5 && s5 === s7 && s3 === s7 && s3 !== "" && s5 !== "" && s7 !== "") {
        change0.innerHTML = "WINNER";
        alert("winner");
    }

}

function clear() {
    document.getElementById("square-1").innerHTML = "";
    document.getElementById("square-2").innerHTML = "";
    document.getElementById("square-3").innerHTML = "";
    document.getElementById("square-4").innerHTML = "";
    document.getElementById("square-5").innerHTML = "";
    document.getElementById("square-6").innerHTML = "";
    document.getElementById("square-7").innerHTML = "";
    document.getElementById("square-8").innerHTML = "";
    document.getElementById("square-9").innerHTML = "";

    document.getElementById("change").innerHTML = "X turn";
}


function new_game() {
    clear();
}