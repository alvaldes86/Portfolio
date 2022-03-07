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
    let occupation = ["S", "o", "f", "t", "w", "a", "r", "e", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", ".", ".", ".", "."];

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

window.onload = () => {
    
    addName();
    addOccupation($("devName").innerHTML);
    
    setInterval(()=>{
        $("devName").innerHTML = "";
        addName();
        addOccupation($("devName").innerHTML);
    }, 9000);

    
}
window.onscroll = () => {
    console.log(window.pageYOffset);
    
    if(window.pageYOffset > 1235 && window.pageYOffset < 1490) {
        $("soft").classList.add("bg");
    } else {
        $("soft").classList.remove("bg");
    }
    if(window.pageYOffset > 1491 && window.pageYOffset < 1890) {
        $("tech").classList.add("bg");
    } else {
        $("tech").classList.remove("bg");   
    }
    if(window.pageYOffset > 1891 && window.pageYOffset < 2156) {
        $("tools").classList.add("bg");
    } else {
        $("tools").classList.remove("bg");   
    }
}
