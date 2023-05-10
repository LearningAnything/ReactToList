
import { ADD_ITEM } from "./actionTypes"
const getActionAddItem = () => ({
    type: ADD_ITEM
})

const getActionDeleteItem = () => ({
    type: "delete_item",
})

const getChangeInputValue = (e) => ({
    type: 'change_input_value',
    value: e.target.value
})