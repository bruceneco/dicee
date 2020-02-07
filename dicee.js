function dice(){
  var num = (Math.random()*6)+1;
  num = Math.floor(num);
  return num;
}

var player1 = dice();
var player2 = dice();

document.querySelector(".img1").setAttribute("src", ("images/dice"+player1+".png"));
document.querySelector(".img2").setAttribute("src", ("images/dice"+player2+".png"));
if (player1 > player2) {
  document.querySelector("h1").textContent = "🚩 Player 1 WINS!";
} else if (player2 > player1) {
  document.querySelector("h1").textContent = "Player 2 WINS! 🚩";
} else {
  document.querySelector("h1").textContent = "Please reload.";
}
