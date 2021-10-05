import React, { Component } from 'react';
import Tabbar from './components/tabbar'
/* 1.0 引入路由组件 */
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
/* 2.0 导入组件 */
import Home from './components/home/Index.js'
import House from './components/house/Index.js'
import Info from './components/info/Index.js'
import My from './components/my/Index.js'
class App extends Component {
  render() {
    return (
      // 根节点
      <Router>
        {/* 3.0 配置路由 */}
        <Route path="/" render={() => <Redirect to="/index"></Redirect>}></Route>
        <Route path="/index" render={(props) => <Tabbar {...props} type="index"><Home></Home></Tabbar>}></Route>
        <Route path="/house" render={(props) => <Tabbar {...props} type="house"><House></House></Tabbar>}></Route>
        <Route path="/info" render={(props) => <Tabbar {...props} type="info"><Info></Info></Tabbar>}></Route>
        <Route path="/my" render={(props) => <Tabbar {...props} type="my"><My></My></Tabbar>}></Route>
      </Router>
    );
  }
}

export default App;
