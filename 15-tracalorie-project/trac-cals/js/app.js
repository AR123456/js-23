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
//////// instantiate the tracker
const tracker = new CalorieTracker();
const breakfast = new Meal("Breakfast", 1000);
const lunch = new Meal("Lunch", 1000);
const run = new Workout("Morning Run", 200);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);
tracker.addWorkout(run);

tracker._displayNewMeal();
tracker._displayCaloriesBurned();

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
      .addEventListener("submit", this._newMeal.bind(this));
  }
  _newMeal(e) {
    // call on form submit
    e.preventDefault();
    const name = document.getElementById("meal-name");
    const calories = document.getElementById("meal-calories");
    // validate inputs
    if (name.value === "" || calories.value === "") {
      alert("Need name and value");
      return;
    }
    console.log(name.value, calories.value);
    // add + to make the value string into a number
    const meal = new Meal(name.value, +calories.value);
    // call the add meal method on the tracker
    this._tracker.addMeal(meal);
    // clear form
    name.value = "";
    calories.value = "";
  }
  _newItem() {}
  _removeItem() {}
  _filterItems() {}
  _reset() {}
  _setLimit() {}
}
const app = new App();
