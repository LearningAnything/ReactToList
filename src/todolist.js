// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActionAddItem, getActionChangeInputValue, getActionDeleteItem } from './store/actionCreators';

// 这是一个UI组件， 可以写无状态组件
const TodoList = (props) => {
    const { inputValue, changeInputValue, HandleClick, HandleDelete, list } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={HandleClick}> 提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} onClick={HandleDelete.bind(this, index)}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const { inputValue, changeInputValue, HandleClick, HandleDelete } = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={changeInputValue} />
//                     <button onClick={HandleClick}> 提交</button>
//                 </div>
//                 <ul>
//                     {
//                         this.props.list.map((item, index) => {
//                             return (
//                                 <li key={index} onClick={HandleDelete.bind(this, index)}>{item}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }

// }

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
            const action = getActionChangeInputValue(e.target.value)
            dispatch(action)
        },
        HandleClick() {
            const action = getActionAddItem()
            dispatch(action)
        },
        HandleDelete(index) {
            const action = getActionDeleteItem(index)
            dispatch(action)
        }
    }
}
// 让todolist组件和store做关联， store里面的数据映 射到组件的props里面
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
