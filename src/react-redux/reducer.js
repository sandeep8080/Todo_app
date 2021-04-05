import { todos } from "./states";
import { combineReducers } from "redux";
let nextTodoId = 10;

// REDUCER FUNCTION  to handle todos
const todoReducer = (state = todos, actions) => {
    let newTodo;
    switch (actions.type) {
        case "ADD_TODO":
            newTodo = {
                id: nextTodoId++,
                text: actions.payload
            }
            return [...state,
                newTodo
            ];
        case "DELETE_TODO":
            newTodo = state.filter(({ id }) => id !== actions.payload);
            console.log(state, newTodo);
            return newTodo;
        case "UPDATE_TODO":
            const { id, text } = actions.payload;
            newTodo = state.map((todo) => {
                // Avoiding Object mutation
                const oTodo = {
                    id: todo.id,
                    text: todo.text
                };
                if (oTodo.id === id) {
                    oTodo.text = text;
                }
                return oTodo;
            });
            console.log(state, newTodo);
            return newTodo;
        default:
            return state;

    };
};
// REDUCER TO HANDLE ALERT Visibility
const handleAlert = (state = {}, actions) => {
    switch (actions.type) {
        case "SHOW_ALERT":
            const { msg, type } = actions.payload;
            console.log("Show");
            return {
                isVisible: true,
                msg,
                type
            };
        case "HIDE_ALERT":
            console.log("Hide");
            return {
                isVisible: false,
                msg: "",
                type: ""
            };
        default:
            return state;
    }
};

// Global Reducer Function
export const reducer = combineReducers({
    todos: todoReducer,
    alertVisibility: handleAlert
});