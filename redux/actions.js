import { ADD_TASK, DELETE_TASK, HANDLE_CLOSE_MODAL, HANDLE_EDIT, HANDLE_INPUT, HANDLE_OPEN_MODAL, PREPARE_TO_EDIT } from "./types"
import { v4 as uuid } from "uuid"

export const handleInput = (input) => {
    return {
        type: HANDLE_INPUT,
        payload: input,
    }
}

export const addTask = () => {
    let todo = {}
    todo.id = uuid()
    return {
        type: ADD_TASK,
        payload: todo,
    }
}

export const deleteTask = (todo) => {
    return {
        type: DELETE_TASK,
        payload: todo.id
    }
}

export const prepareToEdit = (todo) => {
    return {
        type: PREPARE_TO_EDIT,
        payload: todo,
    }
}

export const handleEdit = () => {
    return {
        type: HANDLE_EDIT,
    }
}

export const handleOpenModal = () => {
    return {
        type: HANDLE_OPEN_MODAL
    }
}

export const handleCloseModal = () => {
    return {
        type: HANDLE_CLOSE_MODAL
    }
}