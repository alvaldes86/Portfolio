"use strict"

//this function returns the element by ID
function $(id) {
    return document.getElementById(id);
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
    if(window.scrollY > 1) {
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
const changeIcon = () => {
    if ($("togg").classList.contains("fa-equals")) {
        $("togg").classList.remove("fa-equals");
        $("togg").classList.add("fa-times");
    } else if ($("togg").classList.contains("fa-times")) {
        $("togg").classList.remove("fa-times");
        $("togg").classList.add("fa-equals");
    }
}

window.onload = function() {
    $("toggler").onclick = () => { 
        changeNavBarMobile();
        changeIcon();
    };
    onscroll = function() {
        changeNavBar();
    }
    console.log($("ul-nav").s);
    /*
    setInterval(function() {
        showDate();
    });
    */
}