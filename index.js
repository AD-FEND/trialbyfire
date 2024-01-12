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

    // Update the total.
    let currentSum = 0
    const listItems = document.querySelectorAll("#numbered-list li")
    for (let i = 0; i < listItems.length; i++) {
        const splitText = listItems[i].textContent.split(":")
        const lastIndex = splitText.length-1;
        const numberText = splitText[lastIndex].trim();
        const numberValue = parseInt(numberText);
        currentSum += numberValue;

        console.log({currentSum,numberValue})
    }


    const elTotalAmountParagraph = document.querySelector("#total-amount");
    elTotalAmountParagraph.textContent = `Total Amount: ${currentSum}`;

}
// Get the random number to come under the number list section.


