"use strict"


const $ = (id) => {return document.getElementById(id)}

const changeName = () => {
    $("devName").onmouseover = () => {
        $("devName").innerHTML = "Software Developer";  
    }
    $("devName").onmouseover = () => {
        if($("devName").innerHTML == "Software Developer") {
            $("devName").innerHTML = "Yohan Valdes";
        }  
    }
    $("devName").onmouseleave = () => {
        $("devName").innerHTML = "Yohan Valdes";
    }
}

window.onload = () => {
    changeName();
}
