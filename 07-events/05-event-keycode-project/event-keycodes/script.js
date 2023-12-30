//  make this website  https://www.toptal.com/developers/keycode
// show the e.key e.keyCode and e.code  on key down
//- ref 50 projects in 50 days course for one solution
// create the key elements in the DOM - for in
// html and css supplied
const insert = document.querySelector("#insert");

const onKeyDown = (e) => {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.code);

  insert.innerHTML = `    <div class="container">

<div class="key">  <small>e.key</small>${e.key === " " ? "Space" : e.key}</div>
<div class="key">  <small>e.keyCode</small> ${e.keyCode}</div>
<div class="key" >  <small>e.code</small> ${e.code}</div>
</div>`;
};
document.addEventListener("keydown", onKeyDown);

//// another way to solve
