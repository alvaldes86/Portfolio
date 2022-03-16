"use strict"

//retrieves element by ID
const $ = (id) => {return document.getElementById(id)};
//retrieves element by CLASS
const getClass = (clss) => {return document.getElementsByClassName(clss)};

const addName = () => {
    let name = ["Y", "o", "h", "a", "n", " ", "G", "a", "r", "c", "i", "a", ".", ".", ".", "."];
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
const overSkillSection = () => {
    if(window.screen.width <= 476) {
        if(window.pageYOffset > 810 && window.pageYOffset < 1075) {
            $("list-1").classList.add("mk-border");
        } else {
            $("list-1").classList.remove("mk-border");
        }
        if(window.pageYOffset > 1076 && window.pageYOffset < 1400) {
            $("list-2").classList.add("mk-border");
        } else {
            $("list-2").classList.remove("mk-border");
        }
        if(window.pageYOffset > 1401 && window.pageYOffset < 1630) {
            $("list-3").classList.add("mk-border");
        } else {
            $("list-3").classList.remove("mk-border");
        }
    }       
}
const overProjectSection = () => {
    if(window.screen.width <= 476) {
        if(window.pageYOffset > 1845 && window.pageYOffset < 2084) {
            $("hover-proj-1").classList.add("bg");
        } else {
            $("hover-proj-1").classList.remove("bg");    
        }
        if(window.pageYOffset > 2085 && window.pageYOffset < 2245) {
            $("hover-proj-2").classList.add("bg");
        } else {
            $("hover-proj-2").classList.remove("bg");    
        }
        if(window.pageYOffset > 2246 && window.pageYOffset < 2360) {
            $("hover-proj-3").classList.add("bg");
        } else {
            $("hover-proj-3").classList.remove("bg");    
        }
    }
}
const overCodingChallenges = () => {
    if(window.screen.width <= 476) {
        if(window.pageYOffset > 2572 && window.pageYOffset < 2673) {
            $("cod-1").classList.add("bg-sec");
        } else {
            $("cod-1").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 2674 && window.pageYOffset < 2775) {
            $("cod-2").classList.add("bg-sec");
        } else {
            $("cod-2").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 2776 && window.pageYOffset < 2877) {
            $("cod-3").classList.add("bg-sec");
        } else {
            $("cod-3").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 2878 && window.pageYOffset < 2979) {
            $("cod-4").classList.add("bg-sec");
        } else {
            $("cod-4").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 2980 && window.pageYOffset < 3081) {
            $("cod-5").classList.add("bg-sec");
        } else {
            $("cod-5").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 3082 && window.pageYOffset < 3183) {
            $("cod-6").classList.add("bg-sec");
        } else {
            $("cod-6").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 3184 && window.pageYOffset < 3285) {
            $("cod-7").classList.add("bg-sec");
        } else {
            $("cod-7").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 3286 && window.pageYOffset < 3387) {
            $("cod-8").classList.add("bg-sec");
        } else {
            $("cod-8").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 3388 && window.pageYOffset < 3489) {
            $("cod-9").classList.add("bg-sec");
        } else {
            $("cod-9").classList.remove("bg-sec");    
        }
        if(window.pageYOffset > 3490 && window.pageYOffset < 3591) {
            $("cod-10").classList.add("bg-sec");
        } else {
            $("cod-10").classList.remove("bg-sec");    
        }
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
    overSkillSection();
    overProjectSection();
    overCodingChallenges();
    console.log(window.pageYOffset);
}
