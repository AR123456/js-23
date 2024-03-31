// set up the clock in canvas- all this stuff runs after every repaint
function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //canvas

  ctx.save(); // save the default state before the next repaint
  ctx.clearRect(0, 0, 500, 500); // wipe clean
  ctx.translate(250, 250); // move zero point to the middle of the screen
  ctx.rotate(-Math.PI / 2); //rotate clock face -90 deg

  //// default styles
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#f4f4f4";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  // Draw clock face/border
  ctx.save(); // save the state, everything before it
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#800000";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true); // circular  clock face
  ctx.stroke();
  ctx.fill();
  ctx.restore();
  //adding the tickmarks
  ctx.restore(); // restore default state run last
}
clock();
