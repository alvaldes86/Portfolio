"use strict"


const $ = (id) => {return document.getElementById(id)}

const changeName = () => {
    $("devName").onmouseover = () => {
        $("devName").innerHTML = "Software Developer";  
    }
    $("devName").onmouseleave = () => {
        $("devName").innerHTML = "Yohan Valdes";
    }
}

window.onload = () => {
    changeName();
}
