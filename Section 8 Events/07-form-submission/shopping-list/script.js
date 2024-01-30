const form = document.querySelector("#item-form");
const item = document.querySelector("#item-input");
const priority = document.querySelector("#priority-input");

// function
const onSubmit = (e) => {
  // it flashes because if there is no action on the form that would come into play with a back end the submit action submits to the same page
  e.preventDefault();
  //   console.log(e);
  console.log(item.value, priority.value);
  // important to do both front end validation on the form and on the back end server side as well
};

const onSubmit2 = (e) => {
  // the form data object method
  e.preventDefault();
  // instantiate new FormData get all the prototype methods
  const formData = new FormData(form);
  // Get individual items - get them by their name attribute
  const item = formData.get("item");
  const priority = formData.get("priority");
  console.log(item, priority);
};
const onSubmit3 = (e) => {
  // the form data object method
  e.preventDefault();
  // instantiate new FormData get all the prototype methods
  const formData = new FormData(form);
  // using entries method
  const entries = formData.entries();
  //entries returns an iterator
  // console.log(entries);
  for (let entry of entries) {
    // returns item value array
    console.log(entry);
    console.log(entry[1]);
  }
};
// event listener
// form.addEventListener("submit", onSubmit);

// form.addEventListener("submit", onSubmit2);
form.addEventListener("submit", onSubmit3);
