"use strict"


const $ = (id) => {return document.getElementById(id)}



window.onload = () => {

    let name = ["Y", "o", "h", "a", "n", " ", "V", "a", "l", "d", "e", "s"];
    
    let myInterval = setInterval(()=>{
        if(name.length >= 1) {
            $("devName").innerHTML += name[0];
            name.shift();
        }
        if(name.length == 0) {
            clearInterval(myInterval);
        }
    }, 125);
}
