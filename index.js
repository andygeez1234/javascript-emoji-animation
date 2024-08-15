// Select the body element from the HTML document and store it in a variable
const bodyElement = document.querySelector("body");

// Add an event listener to the body element that listens for mouse movements
bodyElement.addEventListener("mousemove", (event) => {
    // Get the X and Y coordinates of the mouse relative to the body element
    const x = event.offsetX;
    const y = event.offsetY;
    
    // Create a new <span> element that will be added to the document
    const spanElement = document.createElement("span");
    
    // Set the position of the span element to where the mouse is
    spanElement.style.left = x + "px";
    spanElement.style.top = y + "px";
    
    // Append the span element to the body so it appears on the screen
    bodyElement.appendChild(spanElement);
    
    // Generate a random size for the span element (between 0 and 100 pixels)
    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    
    // After 3 seconds (3000 milliseconds), remove the span element from the document
    setTimeout(() => {
        spanElement.remove();
    }, 3000);
});
