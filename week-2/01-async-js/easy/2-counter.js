let counter = 0;

function incrementCounter() {
    counter++;
    console.log(counter);
    
    // Call incrementCounter again after 1 second (1000 milliseconds)
    setTimeout(incrementCounter, 1000);
}

// Start the counter
incrementCounter();
