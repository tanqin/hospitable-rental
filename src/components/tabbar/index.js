import React, { Component } from 'react';
import './index.css'
class Index extends Component {
    state = {
        type: 'index'
    }
    handlerClick = (type) => {
        // debugger
        // this.setState({type})
        this.props.history.push(type)
    }
    render() {
        return (
            <div className="tabbar">
                {/* tabbar 的内容 */}
                <div className="tabbar-content">
                    {this.props.children}
                </div>
                <div className="tabbar-list">
                    <div onClick={this.handlerClick.bind(this,'index')} className={this.props.type === "index" ? "tabbar-item-active tabbar-list-item" : "tabbar-list-item"}>
                        <i className="iconfont icon-icon-test"></i>
                        <span className="text">首页</span>
                    </div>
                    <div onClick={this.handlerClick.bind(this,'house')} className={this.props.type === "house" ? "tabbar-item-active tabbar-list-item" : "tabbar-list-item"}>
                        <i className="iconfont  icon-chazhaofangyuan"></i>
                        <span className="text">找房</span>
                    </div>
                    <div onClick={this.handlerClick.bind(this,'info')} className={this.props.type === "info" ? "tabbar-item-active tabbar-list-item" : "tabbar-list-item"}>
                        <i className="iconfont icon-zixun"></i>
                        <span className="text">咨询</span>
                    </div>
                    <div onClick={this.handlerClick.bind(this,'my')} className={this.props.type === "my" ? "tabbar-item-active tabbar-list-item" : "tabbar-list-item"}>
                        <i className="iconfont icon-wode"></i>
                        <span className="text">我的</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
