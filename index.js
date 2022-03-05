"use strict"


const $ = (id) => {return document.getElementById(id)}

const changeName = () => {
    $("devName").onmouseover = () => {
        $("devName").innerHTML = "Software Developer";

        if(!$("devName").classList.contains("title-animation")) {
            $("devName").classList.add("title-animation");
        } 

    } 
    $("devName").onmouseleave = () => {
        $("devName").innerHTML = "Yohan Valdes";
    }
}

window.onload = () => {
    changeName();
}
