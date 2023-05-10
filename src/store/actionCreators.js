
import { ADD_ITEM, DELETE_ITEM, CHANGE_INPUT_VALUE } from "./actionTypes"
export const getActionAddItem = () => ({
    type: ADD_ITEM
})

export const getActionDeleteItem = () => ({
    type: DELETE_ITEM,
})

export const getActionChangeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})