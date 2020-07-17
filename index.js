var random1 = Math.floor(Math.random() * 6 + 1);
if(random1===1){
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}else if(random1===2){
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}else if(random1===3){
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}else if (random1===4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}else if (random1===5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}else if (random1===6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var random2 = Math.floor(Math.random() * 6 + 1);
if(random2===1){
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}else if(random2===2){
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}else if(random2===3){
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}else if (random2===4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}else if (random2===5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}else if (random2===6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if(random1<random2){
  document.querySelector(".firstFlag").classList.add("visibility");
  document.querySelector(".p1").classList.add("visibility");
}else if (random2<random1) {
  document.querySelector(".secondFlag").classList.add("visibility");
  document.querySelector(".p2").classList.add("visibility");
}
