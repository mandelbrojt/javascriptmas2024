// Get references to DOM elements
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []

// Function to check item is not duplicate
function checkDuplicate() {
    
    /* ⚠️ You need to add code to this function! ⚠️*/ 
    
    // Trim input text
    let itemText = itemInput.value.trim()
    // Split each word after a blank space
    const itemTextArray = itemText.split(" ")
    // Filter words and join them with a blank space
    itemText = itemTextArray.filter((word) => word !== "").join(" ")
    
    // Evaluates if item is already in the list
    const itemAlreadyInList = listArr.includes(itemText)
    
    if (itemAlreadyInList) {
        alert("This item is already in the list!")
    } else {
        listArr.push(itemText)
    }
    renderList()
}

// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift) => {
        const listItem = document.createElement('li')
        listItem.textContent = gift
        shoppingList.appendChild(listItem)
    })
    itemInput.value = ''; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
