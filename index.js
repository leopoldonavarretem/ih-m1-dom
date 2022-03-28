// index.js

const paragraph = document.getElementById("paragraph");
const links = document.getElementsByClassName("link");
const divs = document.getElementsByTagName("div");
const addItemButton = document.getElementById("add-item-button");
const h1 = document.getElementById("title");
const h2Tag = document.createElement("h2");
let parent = document.getElementsByTagName("body")[0];


//MANIPULACION
const attribute = paragraph.getAttribute("id");
const secondAttribute =addItemButton.getAttribute("id");

paragraph.setAttribute("id","info-paragraph");
h1.setAttribute("id", "info-tittle");

h2Tag.innerHTML = "Elephant";
parent.appendChild(h2Tag);