var player_1_name = localStorage.getItem("Player1_name");
var player_2_name = localStorage.getItem("Player2_name");
var player_1_score = 0;
var player_2_score = 0;
document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
function send(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value; 
    var question = document.getElementById("output").innerHTML = num1 + " X " + num2;
    var input_box = "<br> answer : <input type = 'text' id = 'input_answerBox'>";
    var check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>"
    var row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}

