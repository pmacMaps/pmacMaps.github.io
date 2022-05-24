// import function to get user's location
import { getCurrentPosition } from './geolcation.js';
// import function to get weather forecast
import { getUserWeatherGrid } from './weather.js';
// import function to write error messages
import { writeError } from './ui.js';

// function 1) gets user's location; 2) gets weather forecast for user's location; 3) display forecast on webpage
const requestWeatherForecase = () => {
    // get user's location
    getCurrentPosition()
    .then((position) => {
        // print data to console
        console.log(position);
        // set user's latitude and longitude
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        // get user's weather forecast grid from latitude and longitude
        // function to get forecast called within this function
        getUserWeatherGrid(lat, long);
    }).
    catch((err) => { // handle error with request to get user's location
        // print error message to console
        console.error(err.message);
        // display error to user
        writeError('Error getting your location', err.message);
    });
};

// get DOM element reference to button user clicks to request forecast
const btnEl = document.getElementById('getForecast');

// wire up click event to button
// when user clicks button, page will get user's weather forecast
/*
btnEl.addEventListener('click', function() {
    // test to ensure event listener is wired up
    console.log(`${this} "click" event is firing`);
});
*/

btnEl.addEventListener('click', requestWeatherForecase);