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
    const currentSum = sumOfNumberedList()
    const elTotalAmountParagraph = document.querySelector("#total-amount");
    elTotalAmountParagraph.textContent = `Total Amount: ${currentSum}`;

}
// Get the random number to come under the number list section.



document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from calling the server

    // Get values from the form
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a new blog article element
    const articleElement = document.createElement('article');
    articleElement.innerHTML = '<h2>' + title + '</h2><p>' + content + '</p>';

    // Append the new blog article to the blog section
    document.getElementById('blog-section').appendChild(articleElement);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});



// Update the total.

function sumOfNumberedList() {
    let currentSum = 0
    const listItems = document.querySelectorAll("#numbered-list li")
    for (let i = 0; i < listItems.length; i++) {
        const splitText = listItems[i].textContent.split(":")
        const lastIndex = splitText.length-1;
        const numberText = splitText[lastIndex].trim();
        const numberValue = parseInt(numberText);
        currentSum += numberValue;
        
    }
    return  currentSum;
}


// Add new button to change the background of the page to a random colour

function changeBackgroundColor(){
    const body = document.querySelector('#change-color')
    body.style.backgroundColor = 'red';
}

// Add a delete button on every blog article, when you click the delete button the specific related article will delete.
