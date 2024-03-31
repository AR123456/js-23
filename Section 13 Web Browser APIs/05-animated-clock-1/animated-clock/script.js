// set up the clock in canvas- all this stuff runs after every repaint
function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //canvas

  ctx.save(); // save the default state before the next repaint
  ctx.clearRect(0, 0, 500, 500);

  ctx.restore(); // restore default state run last
}
