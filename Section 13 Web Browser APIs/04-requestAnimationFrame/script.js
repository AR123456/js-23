const ball = document.querySelector("img");
// declare vars
let start, previousTimeStamp;
let done = false;

function step(timeStamp) {
  //   console.log(timeStamp);
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;
  //   console.log(elapsed);
  //   console.log(timeStamp);

  if (previousTimeStamp !== timeStamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.1 * elapsed, 200);
    // ball.style.transform = `translateX(${count}px)`;
    // ball.style.transform = `translateY(${count}px)`;
    // rotate
    ball.style.transform = `translateX(${elapsed / 20}px) rotate(${
      elapsed / 20
    }deg)`;
    if (count === 200) done = true;
  }
  if (elapsed < 5000) {
    // Stop the animation after 2 seconds
    previousTimeStamp = timeStamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}
window.requestAnimationFrame(step);
