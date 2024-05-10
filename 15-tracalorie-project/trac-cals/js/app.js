class CalorieTracker {
  //public addMeal,removeMeal,addWorkout,removeWorkout,resetDay,setLimit,loadItems
  // private displayCaloriesTotal,displayCalorieLimit, displayCaloriesConsumed,displayCaloriesBurned,displayCaloriesRemaining,displayNewMeal,displayNewWorkout,renderStats - this will be called alot to update dom after actions
  // define const getElementById  displaying in dom in private Methods
  constructor() {
    // only using these properties in this class so making private using underscore
    this._caloriesLimit = 2200;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    // run the methods to update the dom
    this._displayCalorieLimit();
    this._displayCaloriesTotal();
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
  _displayCaloriesConsumed() {}
  _displayCaloriesBurned() {
    console.log(tracker._workouts);
    document.getElementById("calories-burned").innerHTML =
      tracker._workouts[0].calories;
  }
  _displayCaloriesRemaining() {}
  _displayNewMeal() {
    console.log(tracker._meals);
  }
  _displayNewWorkout() {}
  _renderStats() {
    this._displayCaloriesTotal();
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
const breakfast = new Meal("Breakfast", 400);
const lunch = new Meal("Lunch", 350);
const run = new Workout("Morning Run", 300);
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
  // listening for events happeining in DOM and methods firing from events
  // private  newItem - new meal or workout, removeItem, filterItems, reset() and setLimit - from in these private methods will be calling some of the public methods in the CalorieTracker class
  // _loadEventListeners(){} - getElementById from forms,  addEventListener submit.  also the filters getElements and event listener of keyup ,  also reset and ue click as its event
  // input validation in here on the _newItem method
}

const app = new App();
