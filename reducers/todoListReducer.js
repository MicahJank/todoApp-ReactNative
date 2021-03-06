// import action variables
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions';

const intialState = { 
    todos: [],
    error: '',
    pending: false
}

const todoList = (state = intialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                }).sort((todo1, todo2) => {
                    return (todo1.completed === todo2.completed) ? 0 : todo1.completed ? 1 : -1;
                })
            }
        case DELETE_TODO: 
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
}

export default todoList;