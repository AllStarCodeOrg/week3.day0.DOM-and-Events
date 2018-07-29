# To Do List
1. Do NOT use CSS or alter the original HTML
2. View the original HTML in the browser. The four icons correspond to 4 abilities. 
   - In a game, a character's abilities are too powerful to be used without a cooldown (a period of time when the ability cannot be used).
3. This task will be more open-ended than the others.
   - *Tip: Before tackling all of the icons, just try getting 1 ability to work. Coding the rest will be easier!*
4. When the user presses a key on the keyboard, the corresponding icon's image should darken, to signify the ability is no long available to use.
   - *Note: the id's for each image corresponds to the key to be pressed (q,w,e,r). Pressing any other key should do nothing.*
   - *Hint: dulling the image can be done with the `filter` property and a value like `brightness(.3)`*
5. Each ability has it's own [cooldown time](http://leagueoflegends.wikia.com/wiki/Lux).
   - q : 10 sec
   - w : 10 sec
   - e : 8 sec
   - r : 50 sec
6. While an ability is on cooldown, pressing it's corresponding key shouldn't do anything.
7. After an ability's cooldown time is up, the image should go back to normal.
   - *Hint: you can return the image back to it's initial state by giving the `filter` property a value of `initial`*
   - *Tip: Check out the [setTimout() function](https://www.w3schools.com/jsref/met_win_settimeout.asp) to execute a function after a set amount of time (**in milliseconds**)*
     - Here's an example using setTimeout()
    ```javascript
    const fireLaser = function(){
        console.log("I'm firin' my laser!!!");
    }
    console.log("This executes right away!");
    setTimeout(fireLaser,2000); 
    // notice 1st argument refers to a function, but is not calling the function. When setTimeout() is executed, it will wait 2000 milliseconds and then call "fireLaser".
    console.log("JavaScript doesn't wait for setTimeout() to finish before moving on.");
    ```
      - Result:
    ```text
    This executes right away!
    JavaScript doesn't wait for setTimeout to finish before moving on.
    undefined
    I'm firin' my laser!!!
    ```
8. Here's a suggested approach for this exercise:
   - When a key is pressed, only a proper key (q,w,e,r) will be accepted
   - Check if ability corresponding to the key is usable (try a boolean variable).
     - If ability usable, dull the image, change boolean variable to prevent ability being used again, and begin setTimeout() with the appropriate cooldown time (in milliseconds)
        - The function used for setTimeout's "callback" function should reset the boolean variable and bring the image back to it's normal appearance
