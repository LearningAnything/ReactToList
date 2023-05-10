import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      // Provider React-Redux提供一个核心的api
      // 提供器连接store， provider里面所有的组件都有能力获取store里的数据
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    )
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// ReactDOM.render(App, document.getElementById('root')); 