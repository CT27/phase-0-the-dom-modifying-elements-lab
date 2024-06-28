// Write your code here!

main.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

const message = document.getElementById("victory");
message.textContent = "Candice is the champion";

document.body.appendChild(newHeader);
