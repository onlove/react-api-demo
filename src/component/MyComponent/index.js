/**
 * Created by DT274 on 2016/8/10.
 */

import React, {Component} from 'react';

class StyleDemo extends Component {
    render () {
        var MyComponentStyles = {
            color:'bule',
            fontSize:'28px'
        }

        return (
            <div style={MyComponentStyles}>
                 可以直接这样写行内样式dddd
            </div>
        )
    };
}

export default StyleDemo



