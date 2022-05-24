// function to write request errors information to webpage
export const writeError = (message, data) => {
    // DOM element to write weather forecast data to
    const dataEl = document.getElementById('errorData');
    // set content of element with error message
    dataEl.innerHTML = `${message} : ${data}`;
}