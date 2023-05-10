import { ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM } from "./actionTypes";

const defaultState = {
  inputValue: 'Hello World',
  list: []
}

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {

    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    const index = action.value
    newState.list.splice(index, 1)
    return newState
  }
  return state;
}

export default reducer;