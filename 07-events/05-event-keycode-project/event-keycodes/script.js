//  make this website  https://www.toptal.com/developers/keycode
// show the e.key e.keyCode and e.code  on key down
//- ref 50 projects in 50 days course for one solution
// create the key elements in the DOM - for in
// html and css supplied
// const insert = document.querySelector("#insert");

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
// document.addEventListener("keydown", onKeyDown);

//// another way to solve
const showKeyCodes = (e) => {
  const insert = document.querySelector("#insert");
  insert.innerHTML = "";

  //make object
  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };
  // console.log(keyCodes);
  // loop the object and create divs, insert text node and append a small div
  for (let key in keyCodes) {
    const div = document.createElement("div");
    // add the class
    div.className = "key";
    // create small element
    const small = document.createElement("small");
    // text to add to the small tag - the "key"part of the key value pair
    const keyText = document.createTextNode(key);
    // text of the keycode - the value of the object - index of key
    const valueText = document.createTextNode(keyCodes[key]);
    // append text nodes to elements
    small.appendChild(keyText);
    div.appendChild(valueText);
    // append the small element into the div
    div.appendChild(small);
    // now add it all to the dom
    insert.appendChild(div);
  }
};
window.addEventListener("keydown", showKeyCodes);
