/**
 * Created by DT274 on 2016/8/12.
 */
import React, {Component} from 'react';

class RadioButtons extends Component {
    saySomething(){
        console.log("一个很棒的的单选按钮组")
    }

    render(){
        return (
            <span>
                A <input type="radio" value='A' onChange={this.props.handleRadio} name="goodRadio"/>
                B <input type="radio" value='B' defaultChecked onChange={this.props.handleRadio} name="goodRadio"/>
                c <input type="radio" value='C' onChange={this.props.handleRadio} name="goodRadio"/>
            </span>
        )
    }
}

export default RadioButtons;