import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./style.css";

export default function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(title) {
        setTodos(currentTodos => [
            ...currentTodos,
            { id: crypto.randomUUID(), title: title, completed: false },
        ]);
    }

    function handleDelete(id) {
        setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
    }

    function toggleCompleted(id) {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <div>
            <NewTodoForm onSubmit={addTodo} />
            <h1 className="header">TODO List</h1>
            {todos.length === 0 ? (
                <p>No Todos</p>
            ) : (
                <ul className="list">
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleCompleted(todo.id)}
                                />
                                {todo.title}
                            </label>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
