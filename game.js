var player1_name=localStorage.getItem("player_1");
var player2_name=localStorage.getItem("player_2");

  var player1_sc=0;
  var player2_sc=0;

document.getElementById("player__1").innerHTML=player1_name+" : ";
document.getElementById("player__2").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_sc;
document.getElementById("player2_score").innerHTML=player2_sc;

document.getElementById("player_quest").innerHTML="Question turn : "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn : "+player2_name;

function send(){
    n1=document.getElementById("num1").value;
   n2=document.getElementById("num2").value;
    act_ans=parseInt(n1)*parseInt(n2);
    
    question="<h4 id='qn'>Q. "+n1+" X "+n2+"</h4>";
    input="<br>Answer : <input id='a'>";
    check="<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
row=question+input+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}