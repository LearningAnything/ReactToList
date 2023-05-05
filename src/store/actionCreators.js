import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";
import store from ".";
import axios from "axios";
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
})

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})


export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data,
})

// 使用了redux-thunk中间件的，返回的action 不一定是一个对象， 也可以是一个函数
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:4523/m1/2674321-0-default/api/todolist.json').then((res) => {
            const data = res.data;
            const action = initListAction(data)
            dispatch(action)
        })
    }
}