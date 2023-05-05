import { Input, Button, List } from "antd";

// 无状态组件
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div>
                <Input
                    value={props.inputVal}
                    onChange={props.handleInputChange}
                    placeholder="todo info"
                    style={{ width: '300px', marginRight: '10px' }} />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={props.list}
                size="small"
                renderItem={(item, index) => <List.Item onClick={(index) => { props.handleDeleteItemClick(index) }}>{item}</List.Item>}

            />
        </div>
    )
}

export default TodoListUI;