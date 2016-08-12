/**
 * Created by DT274 on 2016/8/12.
 */
import React, {Component} from 'react';

class LifeCycle extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.setState({
            value: nextProps.value
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return  <span > {this.props.value}</span >
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount(prevProps, prevState) {
        console.log('componentWillUnmount');
    }
}

LifeCycle.defaultProps = {
    value: "开始渲染"
}

export default LifeCycle