// Many ways of tacklking this! 
// I used Arrays to store info with and abstracted functions,
// but you could also use variable and create unique functions
const abilities = [
    "q",
    "w",
    "e",
    "r"
];

// Cooldowns for each move in milliseconds 
// taken from http://leagueoflegends.wikia.com/wiki/Lux
// these numbers are without CDR - lol
const cooldowns = [
    10000, // cooldown for q
    10000, // cooldown for w
    8000,  // cooldown for e
    50000  // cooldown for r
];

// Flag for each CD. 
// Flag is true if ability can be used, false if it can't
const cooldownFlags = [
    true, // flag for q
    true, // flag for w
    true, // flag for e
    true  // flag for r
];

// function when key pressed
const putAbilityOnCooldown = function(index){
    if(cooldownFlags[index]){
        cooldownFlags[index] = false;
        const image = document.getElementById(abilities[index]);
        image.style.filter = "brightness(.3)";
    
        // begin countdown
        setTimeout(()=>takeAbilityOffCooldown(index),cooldowns[index]);
    }else{
        console.log(`Ability ${abilities[index]} still on cooldown!`);
    }
}

// function when time is up
const takeAbilityOffCooldown = function(index){
    cooldownFlags[index] = true;
    const image = document.getElementById(abilities[index]);
    image.style.filter = "initial";
}

document.addEventListener("keypress",event=>{
    const key = event.key;
    if(abilities.includes(key)){
        const index = abilities.indexOf(key);
        putAbilityOnCooldown(index);
    }
})