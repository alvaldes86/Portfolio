"use strict"


const $ = (id) => {return document.getElementById(id)};           
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
                console.log("add occupation");
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

window.onload = () => {
    
    addName();
    addOccupation($("devName").innerHTML);
}
