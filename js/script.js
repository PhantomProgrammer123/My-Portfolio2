const dynamicText = document.querySelector ("h1 span");
const words = ["Programmer", "Painter", "Web Designer", "Gamer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect(); 

let btn = document.getElementById("btn1234");
btn.onmousemove = function(e) {
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
}

let btn1 = document.getElementById("btn123");
btn1.onmousemove = function(e) {
    let x = e.pageX - btn1.offsetLeft;
    let y = e.pageY - btn1.offsetTop;

    btn1.style.setProperty("--x", x + "px");
    btn1.style.setProperty("--y", y + "px");
}



function Hula() {
    var x = document.nav;
    if (x.className === "elol") {
      x.className += " responsive";
    } else {
      x.className = "elol";
    }
  }

// CURSOR MOVE ANIMATION

// var body12 = document.getElementById("mainbody");
// document.addEventListener('mousemove',(e)=>{
//     var elem = document.createElement('div');
//     elem.setAttribute('class', 'trail')
//     elem.setAttribute('style', `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px;`);
//     elem.onanimationend=()=>{
//         elem.remove();
//     }
//     body12.insertAdjacentElement('beforeend', elem)
// })

//END

// function updateOnlineStatus() {
//     document.getElementById("status").innerHTML = "User is online";
// }

// function updateOfflineStatus() {
//     document.getElementById("status").css = "display: block;"
//     document.getElementById("status").innerHTML = "User is offline";
// }

// window.addEventListener('online', updateOnlineStatus);
// window.addEventListener('offline', updateOfflineStatus); 

function aafg() {
    var ea = document.getElementById('ua');
    ea.classList.add('fa-bounce')
}

function afg() {
    var ea = document.getElementById('ua')
    ea.classList.remove('fa-bounce')
}

function likebtn1() {
    const element = document.getElementById("tlt1");
    element.classList.toggle("fa-solid"); 
    element.classList.toggle("kkh"); 
}

function likebtn2() {
    const element = document.getElementById("tlt2");
    element.classList.toggle("fa-solid"); 
    element.classList.toggle("kkh"); 
}

function likebtn3() {
    const element = document.getElementById("tlt3");
    element.classList.toggle("fa-solid"); 
    element.classList.toggle("kkh"); 
}

function likebtn4() {
    const element = document.getElementById("tlt4");
    element.classList.toggle("fa-solid"); 
    element.classList.toggle("kkh"); 
}

//    const element = document.getElementById("tlt");
// element.classList.toggle("fa-solid fa-heart"); 