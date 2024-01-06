function useName(event) {
    const username = event.target;
    event.preventDefault();
    console.log(username)
    
}

function appendNumberToNumberList() {
    // when i want to click the write random number button
    // a random number should appear.
    const Bannana = Math.random()* 10
    const floored = Math.floor(Bannana) 
    const randomNumber = floored +1
    alert(randomNumber)
    
}

// Get the random number to come under the number list section.

