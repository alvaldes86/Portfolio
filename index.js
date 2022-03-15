"use strict"

//retrieves element by ID
const $ = (id) => {return document.getElementById(id)};
//retrieves element by CLASS
const getClass = (clss) => {return document.getElementsByClassName(clss)};

const addName = () => {
    let name = ["Y", "o", "h", "a", "n", " ", "V", "a", "l", "d", "e", "s", ".", ".", ".", "."];
    let myInterval = setInterval(()=>{
        if(name.length >= 1) {
            $("devName").innerHTML += name[0];
            name.shift();
        }
        if(name.length == 0) {
            clearInterval(myInterval);
            addOccupation($("devName").innerHTML);
        }
    }, 150);
}
const addOccupation = (str) => {
    let arrName = [];
    let occupation = ["S", "o", "f", "t", "w", "a", "r", "e", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];

    //gets the devName
    for(let i = 0; i < str.length; i++) {
        arrName.push(str[i]);
    }

    let myInterval = setInterval(()=>{
        //if statement to delete the name
        if(arrName.length >= 1) {
            arrName.pop();
            let newName = ""
            for(let i = 0 ;i < arrName.length; i++) {
                newName += arrName[i];
            }
            $("devName").innerHTML = newName;
        } else {
            clearInterval(myInterval);
            //once empty add the occupation
            if($("devName").innerHTML.length == 0) {
                let mySecInterval = setInterval(()=>{
                    if(occupation.length >= 1) {
                        $("devName").innerHTML += occupation[0];
                        occupation.shift();
                    }
                    if(occupation.length == 0) {
                        clearInterval(mySecInterval);
                    }
                }, 150);
            }
        }
    }, 150)
}

const overProjects = () => {
    if(window.screen.width <= 476) {
        if(window.pageYOffset > 814 && window.pageYOffset < 1115) {
            $("soft").classList.add("bg");
        } else {
            $("soft").classList.remove("bg");
        }
        if(window.pageYOffset > 1116 && window.pageYOffset < 1452) {
            $("tech").classList.add("bg");
        } else {
            $("tech").classList.remove("bg");   
        }
        if(window.pageYOffset > 1453 && window.pageYOffset < 1697) {
            $("tools").classList.add("bg");
        } else {
            $("tools").classList.remove("bg");   
        }
    } else {
        $("soft").classList.remove("bg");
        $("tech").classList.remove("bg");
        $("tools").classList.remove("bg");
    }
}


window.onload = () => {
    
    addName();
    addOccupation($("devName").innerHTML);
    
    let interval = setInterval(()=>{
        $("devName").innerHTML = "";
        addName();
        addOccupation($("devName").innerHTML);
    }, 9000);
    clearInterval(interval);
    
}
window.onscroll = () => {
    overProjects();
    console.log(window.pageYOffset);
}
