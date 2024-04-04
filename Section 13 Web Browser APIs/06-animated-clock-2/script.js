const faceColor = document.getElementById("face-color");
const borderColor = document.getElementById("border-color");
const largeHandsColor = document.getElementById("large-hands-color");
const lineColor = document.getElementById("line-color");
const secondHandColor = document.getElementById("second-hand-color");
const canvas = document.getElementById("canvas");
// set up the clock in canvas- all this stuff runs after every repaint
function clock() {
  const now = new Date();

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
  //////////////// Draw clock face/border
  ctx.save(); // save the state, everything before it
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true); // circular  clock face
  ctx.stroke();
  ctx.fill();
  ctx.restore(); // restore on clock face
  /////////////////// hour tick marks
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    // rotate a bit with each loop
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();
  /////////////////////// minute tick marks
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    // only draw the minutes if it is not an hour
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    // rotate a bit with each loop even if not drawing line
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
  /////// get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();
  // console.log(`${hr}:${min}:${sec}`);
  ////  draw the hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = largeHandsColor.value;
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();
  ////////  draw the minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = largeHandsColor.value;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();
  //////////// draw second hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = secondHandColor.value;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  // arc in center
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fillStyle = secondHandColor.value;
  ctx.fill();
  ctx.restore();
  //
  ctx.restore(); // restore default state run last
  // call requestAnimation here and outside of the clock function
  requestAnimationFrame(clock);
}
requestAnimationFrame(clock);
/// note this will re load the page so may want to add colors to local storage before
document.getElementById("save-btn").addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png");
  // create link
  const link = document.createElement("a");
  link.download = "clock.png";
  link.href = dataURL;
  // call click on the link
  link.click();
});
