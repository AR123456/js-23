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
const options = {};
navigator.geolocation.getCurrentPosition(curSuccess, curError, options);
