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
                newTodo
            ];
            break;
        case "DELETE_TODO":
            newTodo = state.filter(({ id }) => id !== actions.payload);
            console.log(state, newTodo);
            return newTodo;
            break;
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
            break;
        default:
            return state;

    }
}