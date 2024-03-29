// Get current position
const curSuccess = (pos) => {
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Logitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
};
const curError = (err) => {
  // error object
  console.log(`Error: ${err.code} = ${err.message}`);
};
const curOptions = {
  enableHighAccuracy: true, //Use GPS if able
  timeout: 5000, // Time to wait to stop trying for location

  maximumAge: 0, // Do not use a cached position
};
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()
const target = {
  latitude: 41.3874387,
  longitude: -71.394839,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log("You have reached your destination!");
    navigator.geolocation.clearWatch(id);
  }
}

const watchError = (err) => {
  // error object
  console.log(`Error: ${err.code} = ${err.message}`);
};
const watchOptions = {
  enableHighAccuracy: true, //Use GPS if able
  timeout: 5000, // Time to wait to stop trying for location

  maximumAge: 0, // Do not use a cached position
};
navigator.geolocation.getCurrentPosition(
  watchSuccess,
  watchError,
  watchOptions
);
