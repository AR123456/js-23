const d = new Date(2022, 1, 10, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

// Immediate value evaluation
switch (month) {
  case 1:
    console.log("It is January");
    break; /// break is like return
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  // use default if non of the cases are true
  default:
    console.log("It is not Jan, Feb or March");
  // default does not need a break
}

// Range evaluation
switch (true) {
  case hour < 12:
    console.log("Good Morning");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Night");
}
