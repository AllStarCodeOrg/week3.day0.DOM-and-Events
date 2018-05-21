# To Do List
1. Do NOT use CSS or alter the original HTML
2. Add an on click listener to the `document` that creates an img of a poro at the mouse location
   - Feel free to use any of the poro images in the "assets" folder
   - You can add the images to the `#poros` div, but since you'll want to set the image positions as "absolute" it doesn't really matter where you place the `img` elements
   - If you're having trouble getting the mouse coordinate, try looking into [`.clientX` and `.clientY`](https://www.w3schools.com/jsref/event_clientx.asp)
     - *Note: be sure to account for the "event" object that is passed to all event listener callbacks*
     - *Tip: You'll want to use the number from `.clientX` and `.clientY`, but add "px" at the end when altering the images's `.left` and `.top` properties*
3. Bonus: Instead of using the same image, have a random poro image pop up!