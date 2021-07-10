"use strict"

//this function returns the element by ID
function $(id) {
    return document.getElementById(id);
}
//this function shows the current date
let showDate = () => {
    let date = new Date();
    let hour = date.getHours();
    let ampm = hour >= 12 ? "PM" : "AM";
    let minutes = date.getMinutes();
    //add a zero if minutes are less than 10
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = date.getSeconds();
    //add a zero if seconds are less than 10
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    let fullTime = `${hour}:${minutes}:${seconds}`;
    $("date").innerHTML = `${date.toDateString()}, Time ${fullTime} ${ampm}`;
}

window.onload = function() {
    setInterval(function() {
        showDate();
    });
}