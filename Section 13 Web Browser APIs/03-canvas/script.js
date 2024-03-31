const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// ctx.fillRect(x,y,h,w)
ctx.fillRect(10, 10, 150, 100);
ctx.beginPath();
// arc(x, y, radius, startAngle, endAngle)
//The arc is given an x-coordinate of 100, a y-coordinate of 75, and a radius of 50. To make a full circle, the arc begins at an angle of 0 radians (0°), and ends at an angle of 2π radians (360°).
ctx.fillStyle = "red";
ctx.arc(60, 175, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
// lines begin, move to ,line to , stroke
ctx.beginPath();
ctx.moveTo(10, 250);
ctx.lineTo(100, 250);
ctx.lineWidth = 5;
ctx.stroke();
// draw text
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
// text , x,y, max width
ctx.fillText("Hello world ", 10, 350, 300);
// outline
ctx.strokeStyle = "yellow";
ctx.lineWidth = 1;
ctx.strokeText("Hello world ", 10, 350, 300);
// pulling in an image
// drawImage(image,dx,dy)
const image = document.querySelector("img");
image.style.display = "none";
image.addEventListener("load", () => {
  ctx.drawImage(image, 10, 450, 50, 50);
});
