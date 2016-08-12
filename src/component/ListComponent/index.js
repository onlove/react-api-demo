/**
 * Created by DT274 on 2016/8/12.
 */
import React, {Component} from 'react';


class ListComponent extends Component {
    render() {
        return (
            <ul>
            {
                React.Children.map(this.props.children, function(c, i){
                    return <li data-index = {i}>{c}</li>
                })
            }
            </ul>
        )
    }
}

class UseChildrenComponent extends Component {
    render() {
        return (
            <ListComponent>
                <a href="#">Facebook</a>
                <a href="#">Google</a>
                <a href="#">SpaceX</a>
            </ListComponent>
        )
    }
}

export default UseChildrenComponent;

