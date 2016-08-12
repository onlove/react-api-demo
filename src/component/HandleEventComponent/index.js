/**
 * Created by DT274 on 2016/8/12.
 */
import React, {Component} from 'react';

export default class HandleEvent extends Component {
    state = {
        liked: false
    }

    handleClick = (event) => {
        console.log(event)
        this.setState({
            liked: !this.state.liked
        })
    }


    render() {
        let text = this.state.liked ? '喜欢' : '不喜欢';

        return (
            <p onClick={this.handleClick}>
                我{text}你
            </p>
        )
    }


}
