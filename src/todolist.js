import React, { Component } from "react";
import store from './store';
import { getInputChangeAction, getAddTodoItemAction, getDeleteItemAction } from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleDeleteItemClick = this.handleDeleteItemClick.bind(this)
        store.subscribe(this.handleStoreChange)

    }

    render() {
        return (
            <TodoListUI inputVal={this.state.inputVal}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleDeleteItemClick={this.handleDeleteItemClick}
            />
        )
    }

    handleInputChange(e) {
        const val = e.target.value

        const action = getInputChangeAction(val)
        store.dispatch(action);
        this.setState(() => {
            return {
                inputVal: e.target.value
            }
        })
    }

    handleBtnClick(e) {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleDeleteItemClick(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default Todolist;