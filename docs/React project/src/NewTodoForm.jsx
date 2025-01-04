import { useState } from "react";

export function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem.trim() === "") return; // Prevent empty items
        props.onSubmit(newItem); // Call the parent's `addTodo` function
        setNewItem(""); // Reset the input field
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="btn">ADD</button>
        </form>
    );
}
