/**
 * Created by DT274 on 2016/8/12.
 */
import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';

class HandleDOMComponent extends Component {
    render(){
        return (
            <div>
                <h2>来吧，一起操作DOM</h2>
                <div ref = 'content'>这是我DOM元素里面的内容</div>
            </div>
        )
    }

    componentDidMount(){
        let ele = findDOMNode(this.refs.content);
        let ele1 = this.refs.content;


        console.log(ele)
        console.log(ele.innerHTML);
        console.log(ele1.innerHTML)
    }
}

export default HandleDOMComponent