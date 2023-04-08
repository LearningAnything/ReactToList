import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from './store';

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)

    }

    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>
                    <Input
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                        placeholder="todo info"
                        style={{ width: '300px', marginRight: '10px' }} />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{ marginTop: '10px', width: '300px' }}
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    size="small"
                    renderItem={(item, index) => <List.Item onClick={this.handleDeleteItemClick.bind(this, index)}>{item}</List.Item>}

                />
            </div>
        )
    }

    handleInputChange(e) {
        const val = e.target.value
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
        this.setState(() => {
            return {
                inputVal: e.target.value
            }
        })
    }

    handleBtnClick(e) {
        const action = {
            type: "add_todo_item",
        }
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleDeleteItemClick(index) {
        const action = {
            type: "delete_todo_item",
            index
        }

        store.dispatch(action)
    }
}

export default Todolist;