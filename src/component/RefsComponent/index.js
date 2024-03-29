/**
 * Created by DT274 on 2016/8/12.
 */
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

class Refs extends Component {
    state = {
        red: 0,
        green: 0,
        pink: 0
    }

    update = (e) => {
        this.setState({
            red: findDOMNode(this.refs.red).value,
            green: findDOMNode(this.refs.green).value,
            pink: findDOMNode(this.refs.pink).value
        })
    }

    render(){
        return (
            <div>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br />
                <Slider ref="pink" update={this.update} />
                {this.state.pink}
            </div>
        )
    }
}

class Slider extends Component {
    render(){
        return (
            <input type="range"
                min="0"
                max="255"
                onChange={this.props.update} />
        )
    }
}

export default Refs;