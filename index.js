function useName(event) {
    const username = event.target;
    event.preventDefault();
    console.log(username)
    
}

function appendNumberToNumberList() {
    // when i want to click the write random number button
    // a random number should appear.
    const double = Math.random()* 10
    const floored = Math.floor(double) 
    const randomNumber = floored +1
    const newListItem = document.createElement("li");
    newListItem.textContent = `Random Number: ${randomNumber}`;
    const numberedList = document.getElementById("numbered-list");
    numberedList.appendChild(newListItem);
}
// Get the random number to come under the number list section.


