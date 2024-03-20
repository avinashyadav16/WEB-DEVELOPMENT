

import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {
    todos: [{ id: 1, text: "First ToDo" }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const index = state.todos.findIndex((item) => item.id === action.payload.id)
            if (index >= 0) {
                state.todos[index] = action.payload;
            }
        },

        deleteTodo: (state, action) => {
            const deleteTodo = action.payload
            let isExist = false
            for (let i = 0; i < state.todos.length; i++) {
                if (deleteTodo == state.todos[i].id) {
                    isExist = true
                    break
                }
            }

            if (!isExist) return
            else {
                alert("This Todo already deleted")
            }

        }
    }
})


export const { addTodo, removeTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer


