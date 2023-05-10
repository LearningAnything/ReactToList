
const defaultState = {
  inputValue: 'Hello World',
  list: []
}

const reducer = (state = defaultState, action) => {
  if (action.type === "change_input_value") {

    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === 'add_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state));
    const index = action.value
    newState.list.splice(index, 1)
    return newState
  }
  return state;
}

export default reducer;