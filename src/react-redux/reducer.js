import { todos } from "./states";
let nextTodoId = 10;

export const reducer = (state = todos, actions) => {
    let newTodo;
    switch (actions.type) {
        case "ADD_TODO":
            newTodo = {
                id: nextTodoId++,
                text: actions.payload
            }
            return [...state,
                newTodo];
            break;
        case "DELETE_TODO":
            newTodo = state.filter(({ id }) => id !== actions.payload);
            console.log(state, newTodo);
            return newTodo;
            break;
        case "UPDATE_TODO":
            const { id, text } = actions.payload;
            // TODO: Need to check the why mutation is happening with the prev state
            newTodo = state.map((todo) => {
                if (todo.id === id) {
                    todo.text = text;
                }
                return todo;
            });
            console.log(state, newTodo);
            return newTodo;
            break;
        default:
            return state;

    }
}