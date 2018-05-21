// changing background
document.getElementsByClassName("right_side")[0].style.backgroundColor="#d3c26f";

// adding text shadow
const namesArray = document.getElementsByClassName("name");

for(const name of namesArray){
    name.style.textShadow = "-6px 5px 2px yellow";
}