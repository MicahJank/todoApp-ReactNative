// import action variables
import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

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
                })
            }
        default:
            return state;
    }
}

export default todoList;