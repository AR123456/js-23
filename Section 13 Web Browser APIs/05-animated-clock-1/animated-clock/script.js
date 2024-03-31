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

  ctx.restore(); // restore default state run last
  //// default styles
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#f4f4f4";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
}
