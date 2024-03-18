import { useContext, createContext } from "react";

// Creating a new context named 'TodoContext' and initializing it with an empty object
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Title",
            completed: false,
        },
    ],
    addToDo: (todo) => { },
    updateToDo: (id, todo) => { },
    deleteToDo: (id) => { },
    toggleComplete: (id) => { },

});

// Custom hook 'useTodo' that utilizes the 'useContext' hook to access the 'TodoContext'
export const useTodo = () => {
    return useContext(TodoContext);
}

// Creating a new component named 'Todoprovider' which is a Provider component for 'TodoContext'
export const TodoProvider = TodoContext.Provider