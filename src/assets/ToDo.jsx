import React, { useState } from 'react';
// SVG for the cross icon with onClick handler
const CrossIcon = ({ onClick }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cross-icon"
        onClick={onClick}
    >
        <path
            d="M18 6L6 18M6 6L18 18"
            stroke="#007B55"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

function ToDo(){
     const [item, setItem] = useState(["Take Shower", "Make Coffee", "Start Building"]);
    const [inputValue, setInputValue] = useState("");

    // Adding new task
    function addItem() {
        if (inputValue.trim() !== "") {
            setItem(i => [...i, inputValue]);
            setInputValue(""); // Clear input field
        }
    }

    function removeItem(index) {
        setItem(item.filter((_, i) => i !== index));
    }

    // Rendering List
    const tasks = item.map((i, index) => (
        <li key={index} className="task-item">
            {i}
            <CrossIcon onClick={() => removeItem(index)} />
        </li>
    ));

    return (
        <div className="app-container">
            <ul className="task-list">
                {tasks}
            </ul>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter Your Task"
                className="task-input"
            />
            <button onClick={addItem} className="add-task-button">Add Task</button>
        </div>
    );
}


export default ToDo