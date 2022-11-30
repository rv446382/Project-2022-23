// give source to the images
// catch the images first

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
updateTable();


// give a new source to the images.
// setAttribute() is a method we use to change atribute values of HTML elements
// element.setAttribute('attribute name' ,'value')

img1.setAttribute("src", "./images/6.png");
img2.setAttribute("src", "./images/6.png");

document.addEventListener("keydown", function () {
  //we can use Math.random() method to get random numbers.

  let player1 = Math.ceil(Math.random() * 6);
  console.log(player1);
  let player2 = Math.ceil(Math.random() * 6);

  let src1 = "./images/" + player1 + ".png";
  let src2 = "./images/" + player2 + ".png";
  let heading = document.querySelector(".container>p+h2");

  img1.setAttribute("src", src1);
  img2.setAttribute("src", src2);
  updateTable();

  if (player1 == player2) {
    heading.textContent = "Draw!";
  } else if (player1 > player2) {
    heading.textContent = "Player 1 wins!";
    // we should get the old score ,increment it and stroe the new score .
    // if there is no score1 in local storage we give '0'as the value to score1
    let score1 = localStorage.getItem("score1") || 0;
    // we increment the value by 1
    score1++;
    localStorage.setItem("score1", score1);
    updateTable();
  } else {
    heading.textContent = "Player 2 wins!";
    let score2 = localStorage.getItem("score2") || 0;
    score2++;
    localStorage.setItem("score2", score2);
    updateTable();
  }
});

//console.log(Math.ceil(Math.random()*6));
//src = './images/'+number+'.png';
function updateTable() {
  document.querySelector("#score1").textContent =
    localStorage.getItem("score1") || 0;
  document.querySelector("#score2").textContent =
    localStorage.getItem("score2") || 0;
}
document.querySelector("tabel+p").addEventListener("click", function () {
  document.querySelector(".container>p+h2");
  textContent = "Start!";
  localStorage.setItem("score1", 0);
  localStorage.setItem("score2", 0);
  updateTable();
  img1.setAttribute("src", "./images/6.png");
  img2.setAttribute("src", "./images/6.png");
});
