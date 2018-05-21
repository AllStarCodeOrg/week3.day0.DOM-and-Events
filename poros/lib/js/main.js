/**
 * Creates an img of a random poro at the mouse location, adding it to the "#poros" div
 */
const spawnRandomPoro = function(event){
    const poroImageURLs = [
        "assets/devil_poro.png",
        "assets/draven_poro.png",
        "assets/heim_poro.png",
        "assets/poro1.png",
        "assets/ziggs_poro.png",
    ];

    const randURLPick = poroImageURLs[Math.floor(Math.random()*poroImageURLs.length)];
    const x = event.clientX;
    const y = event.clientY;

    const newImg = document.createElement("img");
    newImg.src = randURLPick;
    newImg.style.position = "absolute";
    newImg.style.left = x + "px";
    newImg.style.top  = y + "px";

    const porosContainer = document.getElementById("poros");
    porosContainer.appendChild(newImg);

}

// setting on click listener
document.addEventListener("click", spawnRandomPoro);
