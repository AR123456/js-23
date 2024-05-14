class CalorieTracker {
  //public addMeal,removeMeal,addWorkout,removeWorkout,resetDay,setLimit,loadItems
  // private displayCaloriesTotal,displayCalorieLimit, displayCaloriesConsumed,displayCaloriesBurned,displayCaloriesRemaining,displayNewMeal,displayNewWorkout,renderStats - this will be called alot to update dom after actions
  // define const getElementById  displaying in dom in private Methods
  constructor() {
    // only using these properties in this class so making private using underscore
    this._caloriesLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    // run the methods to update the dom when page loads
    this._displayCalorieLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }
  //////Public Methods
  addMeal(meal) {
    // add meal to array
    this._meals.push(meal);
    // increment total cals
    this._totalCalories += meal.calories;
    this._renderStats();
  }
  removeMeal() {}
  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._renderStats();
  }
  removeWorkout() {}
  resetDay() {}
  loadItems() {}
  setLimit() {}
  ////Private Methods
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById("calories-total");
    totalCaloriesEl.innerHTML = this._totalCalories;
  }
  _displayCalorieLimit() {
    const caloriesLimitEl = document.getElementById("calories-limit");
    caloriesLimitEl.innerHTML = this._caloriesLimit;
  }
  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById("calories-consumed");
    // use reduce to add all of the values in the _meals array
    const consumed = this._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );
    caloriesConsumedEl.innerHTML = consumed;
  }
  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById("calories-burned");
    const burned = this._workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );
    caloriesBurnedEl.innerHTML = burned;
  }
  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.getElementById("calories-remaining");
    const progressEl = document.getElementById("calorie-progress");
    const remaining = this._caloriesLimit - this._totalCalories;
    caloriesRemainingEl.innerHTML = remaining;
    // console.log(remaining);
    if (remaining <= 0) {
      // red
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        "bg-light"
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add(
        "bg-danger"
      );
      progressEl.classList.remove("bg-success");
      progressEl.classList.add("bg-danger");
    } else {
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        "bg-danger"
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add("bg-light");
      progressEl.classList.remove("bg-danger");
      progressEl.classList.remove("bg-success");
    }
  }
  _displayCaloriesProgress() {
    const progressEl = document.getElementById("calorie-progress");
    const percentage = (this._totalCalories / this._caloriesLimit) * 100;
    const width = Math.min(percentage, 100);
    progressEl.style.width = `${width}%`;

    // console.log(width);
  }
  _displayNewMeal() {
    // console.log(tracker._meals);
  }
  _displayNewWorkout() {}
  _renderStats() {
    // updates when a meal or workout is added
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }
}

class Meal {
  // constructor id,name,cal
  constructor(name, calories) {
    // the id comes from db IRL , hexidecimal 16 based number - could also use a date and time stamp as random id
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}
class Workout {
  // constructor id,name,cal
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Storage {}
// static methods - getCalorieLimit,setCalorieLimit,getTotalCalories, setTotalCalories,updateCalories,saveMeal,removeMeal,saveWorkout,removeWorkout,getMeals,getWorkouts,clearAll
class App {
  //// deals with DOM
  // constructor = Event listeners and initialize tracker instance of the calorie tracker
  // listening for events happening in DOM and methods firing from events
  // private  newItem - new meal or workout, removeItem, filterItems, reset() and setLimit - from in these private methods will be calling some of the public methods in the CalorieTracker class
  // _loadEventListeners(){} - getElementById from forms,  addEventListener submit.  also the filters getElements and event listener of keyup ,  also reset and ue click as its event
  // input validation in here on the _newItem method
  constructor() {
    // set the tracker to a property in the constructor
    this._tracker = new CalorieTracker();
    // define event listeners
    document
      .getElementById("meal-form")
      // need to use bind so that this is the app not the element the event is on
      .addEventListener("submit", this._newItem.bind(this));
    document
      .getElementById("workout-form")
      .addEventListener("submit", this._newItem.bind(this));
  }

  _newMeal(e) {
    // call on form submit
    // e.preventDefault();
    // const name = document.getElementById("meal-name");
    // const calories = document.getElementById("meal-calories");
    // validate inputs
    if (name.value === "" || calories.value === "") {
      alert("Need name and value");
      return;
    }
    // add + to make the value string into a number
    // const meal = new Meal(name.value, +calories.value);
    // call the add meal method on the tracker
    // this._tracker.addMeal(meal);
    // clear form
    // name.value = "";
    // calories.value = "";
    // re collapse the bootstrap modal from bootstrap docs
    const collapseMeal = document.getElementById("collapse-meal");
    const bsCollapse = new bootstrap.Collapse(collapseMeal, {
      toggle: true,
    });
  }
  _newWorkout(e) {
    e.preventDefault();
    // const name = document.getElementById("workout-name");
    // const calories = document.getElementById("workout-calories");

    if (name.value === "" || calories.value === "") {
      alert("Need name and value");
      return;
    }

    // const workout = new Workout(name.value, +calories.value);
    // this._tracker.addWorkout(workout);
    // name.value = "";
    // calories.value = "";
    // const collapseWorkout = document.getElementById("collapse-workout");
    // const bsCollapse = new bootstrap.Collapse(collapseWorkout, {
    //   toggle: true,
    // });
  }
  _newItem(e) {
    e.preventDefault();
    const nameMeal = document.getElementById("meal-name");
    const caloriesMeal = document.getElementById("meal-calories");
    const nameWorkout = document.getElementById("workout-name");
    const caloriesWorkout = document.getElementById("workout-calories");

    const meal = new Meal(nameMeal.value, +caloriesMeal.value);
    this._tracker.addMeal(meal);
    const workout = new Workout(nameWorkout.value, +caloriesWorkout.value);
    this._tracker.addWorkout(workout);
    nameMeal.value = "";
    caloriesMeal.value = "";
    nameWorkout.value = "";
    caloriesWorkout.value = "";
    const collapseMeal = document.getElementById("collapse-meal");
    const collapseWorkout = document.getElementById("collapse-workout");
    const bsCollapse = new bootstrap.Collapse(collapseWorkout, {
      toggle: true,
    });
  }
  _removeItem() {}
  _filterItems() {}
  _reset() {}
  _setLimit() {}
}
const app = new App();
