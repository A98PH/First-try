const myHeading = document.querySelector("h1");
myHeading.textContent = "Trying IK for the first time"

const myImage = document.querySelector("img");

// Image switcher code

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "IncaKolaBottleGlass.jpg") {
    myImage.setAttribute("src", "images/I-K2.jpeg");
  } else {
    myImage.setAttribute("src", "IncaKolaBottleGlass.jpg");
  }
};

// Personalized welcome message code
// Do not change beforehand

let myButton = document.querySelector("button");
let mySubHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
      setUserName();
    } else {
  localStorage.setItem("name", myName);
  mySubHeading.textContent = `IK is the best, ${myName}`;
  }
}

function nonUserName() {
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  mySubHeading.textContent = `IK is the best, ${storedName}`;
  }
}

function init() {
  myButton.onclick = function() {
    setUserName();
  }
  nonUserName()
}

init()

alert("Inca Kola Web Page");

//Consola

let persona = {name: "Mario"}
console.log(persona.name)