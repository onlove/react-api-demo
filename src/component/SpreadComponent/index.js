/**
 * Created by DT274 on 2016/8/10.
 */
import React, {Component} from 'react';

class SpreadDemo extends Component {
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return <h1>{this.props.name} is a {this.props.type}</h1>
    }
}
export default SpreadDemo;