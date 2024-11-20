import { ADD_TASK, DELETE_TASK, HANDLE_CLOSE_MODAL, HANDLE_EDIT, HANDLE_INPUT, HANDLE_OPEN_MODAL, PREPARE_TO_EDIT } from "./types"

let initialState = {
    task: "",
    editTask: "",
    editId: "",
    todos: [],
    isEdit: false,
    modalOpen: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case HANDLE_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }

        case ADD_TASK:
            action.payload.task = state.task
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                task: "",
                modalOpen: false,
            }

        case DELETE_TASK:
            let allTheOThers = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: allTheOThers,
            }

        case PREPARE_TO_EDIT:
            return {
                ...state,
                isEdit: true,
                editId: action.payload.id,
                editTask: action.payload.task,
            }

        case HANDLE_EDIT:
            let youveChanged = state.todos.map(todo => {
                if (todo.id === state.editId) {
                    todo.task = state.editTask
                }
                return todo
            })
            return {
                ...state,
                todos: youveChanged,
                isEdit: false,
                editId: "",
                editTask: "",
            }

        case HANDLE_OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,
            }

        case HANDLE_CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false,
            }

        default:
            return state
    }
}


export default rootReducer