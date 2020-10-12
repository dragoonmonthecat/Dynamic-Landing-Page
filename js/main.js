//DOM variables
const time = document.getElementById('time');
const name = document.getElementById('name');
const focus = document.getElementById('focus-input');

function showTime() {
    //get time data from Date API
    let todaysTime = new Date();
    let seconds = todaysTime.getSeconds();
    let minutes = todaysTime.getMinutes();
    let hours = todaysTime.getHours();

    //correct time to add zero infront of 1 digit numbers
    if(seconds < 10) seconds = addZero(seconds);
    if(minutes < 10) minutes = addZero(minutes);

    //output to HTML
    time.innerHTML = `${hours}:${minutes}:${seconds}`;

    setTimeout(showTime, 1000);//running this function every 1000 miliseconds (1 second)
}

function addZero(num) {
    //function will simply add a zero to 1 digit numbers
    return '0' + num;
}

function getName() {
    //function to get name input by user
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }
    else {
        name.textContent = localStorage.getItem('name');
    }

}

function setName(e) {
    //function to store input into local storage
    if(e.type == 'keypress') {
        //making sure Enter key is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    }
    else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    //function to get focus input by user
    if(localStorage.getItem('focus-input') === null) {
        focus.textContent = '[Enter Focus]';
    }
    else {
        focus.textContent = localStorage.getItem('focus-input');
    }
}

function setFocus(e) {
    //function to store input into local storage
    if(e.type == 'keypress') {
        //making sure Enter key is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus-input', e.target.innerText);
            focus.blur();
        }

    }
    else {
        localStorage.setItem('focus-input', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('keypress', setFocus);
name.addEventListener('blur', setFocus);

//RUN functions
showTime();
getName();
getFocus();