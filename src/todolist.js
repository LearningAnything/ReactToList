import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                    <button onClick={this.props.HandleClick}> 提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li key={index} onClick={this.props.HandleDelete.bind(this, index)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}
// mapStateToProps
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//dispatch 指的就是 store.dispatch 
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            console.log(e.target.value)
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        HandleClick() {
            const action = {
                type: "add_item"
            }
            dispatch(action)
        },
        HandleDelete(index) {
            const action = {
                type: "delete_item",
                value: index
            }
            dispatch(action)
        }
    }
}
// 让todolist组件和store做关联， store里面的数据映 射到组件的props里面
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
