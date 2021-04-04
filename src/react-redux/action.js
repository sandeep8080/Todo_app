export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const deleteTodo = (todoId) => {
    console.log(todoId);
    return {
        type: DELETE_TODO,
        payload: todoId
    }
};

export const updateTodo = (todo) => {
    // Passing the todo as an object
    return {
        type: UPDATE_TODO,
        payload: todo
    }
};

export const showAlert = (alert) => {
    return {
        type: "SHOW_ALERT",
        payload: alert
    }
};

export const hideAlert = () => {
    return {
        type: "HIDE_ALERT",
    }
};