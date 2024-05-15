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
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._displayNewMeal(meal);
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
    if (remaining <= 0) {
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
  }
  _displayNewMeal() {
    const mealsEl = document.getElementById("meal-items");
    for (let i = 0; i < this._meals.length; i++) {
      mealsEl.innerHTML = `            <div class="card my-2">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${this._meals[i].name}</h4>
          <div
            class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
          >
        ${this._meals[i].calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>`;
    }
    //   mealsEl.innerHTML = `            <div class="card my-2">
    //   <div class="card-body">
    //     <div class="d-flex align-items-center justify-content-between">
    //       <h4 class="mx-1">${this._meals[i].name}</h4>
    //       <div
    //         class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
    //       >
    //     ${this._meals[i].calories}
    //       </div>
    //       <button class="delete btn btn-danger btn-sm mx-2">
    //         <i class="fa-solid fa-xmark"></i>
    //       </button>
    //     </div>
    //   </div>
    // </div>`;
    console.log(this._meals[0].name);
    console.log(this._meals[0].calories);
  }
  _displayNewWorkout() {}
  _renderStats() {
    // updates when a meal or workout is added
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
    this._displayNewMeal();
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

      .addEventListener("submit", this._newItem.bind(this, "meal"));
    document
      .getElementById("workout-form")
      // adding arg after this to add the type item
      .addEventListener("submit", this._newItem.bind(this, "workout"));
  }
  // pass in the arg of type for meal or workout
  _newItem(type, e) {
    e.preventDefault();
    // make dynamic to take passed in type
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);
    if (name.value === "" || calories.value === "") {
      alert("Please fill in all fields");
      return;
    }
    if (type === "meal") {
      const meal = new Meal(name.value, +calories.value);
      this._tracker.addMeal(meal);
    }
    if (type === "workout") {
      const workout = new Workout(name.value, +calories.value);
      this._tracker.addWorkout(workout);
    }
    name.value = "";
    calories.value = "";
    const collapseItem = document.getElementById(`collapse-${type}`);
    const bsCollapse = new bootstrap.Collapse(collapseItem, {
      toggle: true,
    });
  }
  _removeItem() {}
  _filterItems() {}
  _reset() {}
  _setLimit() {}
}
const app = new App();
