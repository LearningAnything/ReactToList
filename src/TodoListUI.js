import React, { Component } from "react"
import { Input, Button, List } from "antd";

class TodoListUI extends Component {
    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>
                    <Input
                        value={this.props.inputVal}
                        onChange={this.props.handleInputChange}
                        placeholder="todo info"
                        style={{ width: '300px', marginRight: '10px' }} />
                    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{ marginTop: '10px', width: '300px' }}
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.list}
                    size="small"
                    renderItem={(item, index) => <List.Item onClick={(index) => { this.props.handleDeleteItemClick(index) }}>{item}</List.Item>}

                />
            </div>
        )
    }
}

export default TodoListUI;