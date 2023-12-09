/* JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). */

let d;

// Get today's date and time -  its not a primitive , its an object
d = new Date();

// Set to a string
d = d.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");

d = new Date("2022-07-10");
// if you use hypens with year first it could be off by a day
d = new Date("07-10-2022");

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();

// Get the timestamp of a specific date - a point int time since 1/1/1970 returned in miliseconds

d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d);

// You can interact with the timestamp value directly using the getTime() and setTime() methods.
