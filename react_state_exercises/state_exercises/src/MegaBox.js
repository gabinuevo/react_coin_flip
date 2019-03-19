import React, { Component } from 'react';
import Box from './Box'

class MegaBox extends Component {
    static defaultProps = {
        colors: ['peachpuff', 'tomato', 'BurlyWood', 'OliveDrab', 'PapayaWhip', 'RebeccaPurple', 'Peru', 'LightSalmon', 'Indigo',
        'LawnGreen', 'LightSalmon', 'Maroon', 'MidnightBlue', 'Orchid', 'Plum', 'SandyBrown']
    }
    render() {
        const boxes = this.props.colors
                .map(color => (<Box color={color}/>))
        return (
        <div className="MegaBox">
            {boxes}
        </div>
        );
    }
}

export default MegaBox;
