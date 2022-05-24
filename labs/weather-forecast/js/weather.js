//  more information about NWS API at https://www.weather.gov/documentation/services-web-api

// import function to write error messages
import { writeError } from './ui.js';

// function to get weather forecast grid from user's location
export const getUserWeatherGrid = (lat, long) => {
    const url = `https://api.weather.gov/points/${lat},${long}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // display data returned from server
        console.log(data);
        // get weather forecast
        // passing in url that returns forecast data
        getWeatherForcast(data.properties.forecast);
    }).
    catch((err) => { // handle errors with requesting forecast location
        // print error to console
        console.error(err.message);
        // display error to user
        writeError('Error getting forecast location', err.message);
    });
}

// function gets weather forecast for user
const getWeatherForcast = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // display data returned
        console.log(data);
        // display first item of forecast data
        console.log(`${data.properties.periods[0].name} : ${data.properties.periods[0].detailedForecast}`);
        // element to write forecast data to
        const contentEl = document.getElementById('forecaseData');
        // loop over forecast data and write content to paragraph element
        // append paragraph element to div to display information to user
        for (const forecast of data.properties.periods) {
            // create a paragraph element
            const pEl = document.createElement('p');
            // set content of paragraph to forecast data
            pEl.innerHTML = `${forecast.name} : ${forecast.detailedForecast}`;
            // append paragraph element to div
            contentEl.appendChild(pEl);
        }
    }).
    catch((err) => { // handle error with requesting weather forecast info
        // print error to console
        console.error(err.message);
        // display error to user
        writeError('Error getting weather forcast', err.message);
    });
}