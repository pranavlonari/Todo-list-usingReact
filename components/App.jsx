import React, { useState } from "react";

function App() {
  // State for input value
  const [inputValue, setInputValue] = useState(" ");

  // State for the list of items
  const [items, setItems] = useState([]);

  // Function to handle input change
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  // Function to handle adding a new item
  function handleAddItem() {
    // Check if input value is not empty or just whitespace
    if (inputValue.trim() !== "") {
      // Add new item to the list and clear the input
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }

  // Function to handle removing an item by index
  function handleRemoveItem(index) {
    // Create a copy of the items array
    const updatedItems = [...items];

    // Remove the item at the specified index
    updatedItems.splice(index, 1);

    // Update the state with the modified items array
    setItems(updatedItems);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* Input for adding new items */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new item"
        />
        {/* Button to add a new item */}
        <button onClick={handleAddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* Display the list of items */}
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              {/* Button to remove an item */}
              <div>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
