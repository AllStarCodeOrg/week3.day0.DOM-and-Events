// Creating new div
const newDiv = document.createElement("div");
// adding class names
newDiv.className = "champ_container pyke";
// appending new div to end of .main_container
const main_container = document.getElementsByClassName("main_container")[0];
main_container.appendChild(newDiv);
// adding h2 with text
const h2 = document.createElement("h2");
h2.innerHTML = "pyke, the bloodharbor ripper";
newDiv.appendChild(h2);
// adding CSS to "pyke" class
const pyke = document.getElementsByClassName("pyke")[0];
// Notice how url is relative to the HTML document
pyke.style.backgroundImage = "url('assets/pyke.jpg')"; 
pyke.style.color = "#92fdfe"; 