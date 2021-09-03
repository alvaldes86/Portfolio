"use strict"

//this function returns the element by ID
function $(id) {
    return document.getElementById(id);
}

const changeToggle = () => {
    let toggle = $("toggle");
    if(toggle.getAttribute("src") == "./images-logo/toogle.svg") {
        toggle.src = "./images-logo/toogle-off.svg";
    } 
    else if (toggle.getAttribute("src") == "./images-logo/toogle-off.svg") {
        toggle.src = "./images-logo/toogle.svg";
    }
}

//this function shows the current date
const showDate = () => {
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

const changeNavBar = () => {
    if(window.scrollY > 150) {
        $("nav-bar").classList.add("gradient-bg");
        $("nav-bar").style.opacity = "0.9";
    } else if(window.scrollY <= 0) {
        $("nav-bar").classList.remove("gradient-bg");
        $("nav-bar").style.opacity = "1";
    }
}
const changeNavBarMobile = () => {
    if(window.scrollY <= 0) {
        if(! $("nav-bar").classList.contains("gradient-bg")) {
            $("nav-bar").classList.add("gradient-bg");
        } else {
            $("nav-bar").classList.remove("gradient-bg");
        }
    }
}

window.onload = function() {
    $("toggler").onclick = () => { 
        changeNavBarMobile();   
    };
    onscroll = function() {
        changeNavBar();
    }
    /*
    setInterval(function() {
        showDate();
    });
    */
}