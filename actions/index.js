export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = todoText => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: {
            text: todoText,
            completed: false,
            id: Date.now()
        }
    })
}

export const toggleCompleted = todo => dispatch => {
    dispatch({
        type: TOGGLE_COMPLETED,
        payload: todo.id
    })
}

export const deleteTodo = todo => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: todo.id
    })
}