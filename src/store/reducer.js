import { act } from "react-dom/test-utils"


const defaultState = {
    inputVal: '',
    list: []
}

// reducer 可以接受state，但不可以修改
export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }

    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = [newState.inputVal, ...newState.list]
        newState.inputVal = ''
        return newState
    }

    if (action.type === 'delete_todo_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}