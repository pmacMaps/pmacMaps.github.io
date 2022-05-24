// more info on geolocation api > https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// function to get user's current location
export const getCurrentPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}