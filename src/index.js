//1.第一种方式
//script 引入react.js react-dom.js
// jsx --> babel 5.8.23 版本 JSX


//2.ES5
//var React = require('react');
//var ReactDOM = require('react-dom');
//
//var MyComponent = React.createClass({
//    render:function(){
//        return <div>haaa</div>
//    }
//});
//
//ReactDOM.render(<MyComponent />, document.getElementById("app"));


//3.ES6
//import React, {Component} from 'react';
//import ReactDOM, { render } from 'react-dom';
//
//console.log(React);
//console.log(ReactDOM);
//
//class MyComponent extends Component {
//    render(){
//        //return <h1>haaaaaa</h1> JSX 语法
//        return React.createElement('h1', null, 'h1')
//    }
//}
//
//
//render(<MyComponent />, document.getElementById("app"));
// React      11个api
// ReactDOM   5个api


//4.exp
//import React, {Component} from 'react';
//import ReactDOM, { render } from 'react-dom';
//import SpreadDemo from './component/SpreadComponent/index.js';
//
//
//const obj = {
//    name : 'aa',
//    type:'b'
//}
//
//render(<SpreadDemo {...obj}/>,
//      document.getElementById("app"))
// 组件
// 状态机
// props(输入) -> 组件内部逻辑(state) ->html
// state 管理组件内部的状态
// props 外界，父组件，传入进来的（输入）


//5.exp
//import React, {Component} from 'react';
//import ReactDOM, {render} from 'react-dom';
//import DateDemo from './component/DateStream';
//
//render(<DateDemo status = '77777'/>, document.getElementById("app"));

//state初始化
//1.es5  getInitialState:function(){}
//2.es6
//  a. state = {}
/*  b. constructor(){
 super();
 this.state = {};
 }*/
//改变state
//this.setState       改变已有的值
//this.replaceState   全局替换


//6.exp
//props
//顶层逐级下渲染，父组件到子组件  类似于香槟塔
//初始props
//1.es5 getDefaultProps:function(){}
//2.es6
//  a. props = {}
//  b.defaultProps ={}


//1.初始的props的设置
//2.调用组件的时候，传递props 属性


//propTypes 代码约束 接口 规范


//6 生命周期
//import React, {Component} from 'react';
//import ReactDOM, {render} from 'react-dom';
////import LifeCycleDemo from './component/LifeCycle';
//import Destory from './component/DestroyComponent/index'
//
//render(<Destory />, document.getElementById("app"));




//7获取元素
//import React, {Component} from 'react';
//import ReactDOM, {render} from 'react-dom';
//import HandleDom from './component/HandleDOMComponent/index';
//
//render(<HandleDom />, document.getElementById("app"));

//import React, {Component} from 'react';
//import ReactDom, {render} from 'react-dom';
//import RefsDemo from './component/RefsComponent/index';
//render(<RefsDemo />, document.getElementById('app'));



//8.事件
//import React, {Component} from 'react';
//import ReactDOM, {render} from 'react-dom';
//import HandleEventDemo from './component/HandleEventComponent/index';
//
//render(<HandleEventDemo />, document.getElementById('app'))



/*9.组件嵌套
//import React, {Component} from 'react';
//import ReactDOM, {render} from 'react-dom';
//
//import UseChildrenDemo from './component/ListComponent/index';
//
//render(<UseChildrenDemo />, document.getElementById('app'))
*/

//10.表单
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import FromAppDemo from './component/FormComponent';

render(<FromAppDemo />, document.getElementById('app'))











































