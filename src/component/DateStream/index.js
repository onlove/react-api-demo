/**
 * Created by DT274 on 2016/8/11.
 */
import React, { Component, propTypes } from 'react';


const defaultProps = {
    status:'hhhh'
};
class DateDemo extends Component {
    state = {
        secondsElapsed: 0
    };

    tick() {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnMount(){
        clearInterval(this.interval);
    }

    render(){
        console.log(this)
        return (
            <div>目前已经计时：{this.state.secondsElapsed}秒, {this.props.status}</div>
        )
    }
}

DateDemo.defaultProps = defaultProps;

DateDemo.propTypes = {
    status: React.PropTypes.string
}
export default DateDemo