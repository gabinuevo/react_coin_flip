import React, { Component } from 'react';
import Box from './Box'

class MegaBox extends Component {
    static defaultProps = {
        colors: ['peachpuff', 'tomato', 'BurlyWood', 'OliveDrab', 'PapayaWhip', 'RebeccaPurple', 'Peru', 'LightSalmon', 'Indigo',
        'LawnGreen', 'LightSalmon', 'Maroon', 'MidnightBlue', 'Orchid', 'Plum', 'SandyBrown']
    }

    constructor(props) {
        super(props);
        this.changeRandoBox = this.changeRandoBox.bind(this);
        this.state = {colors: this.props.colors.slice()};
    }


    changeRandoBox(evt) {
        const randIdx = Math.floor(Math.random() * this.state.colors.length);
        const randColor = this.props.colors[Math.floor(Math.random() * this.state.colors.length)];
        const newColors = this.state.colors.slice();
        newColors[randIdx] = randColor;
        console.log("THIS IS WHAT NEWCOLORS IS:", newColors)
        console.log("THIS IS WHAT RANDIDX IS:", randIdx)
        console.log("THIS IS WHAT RANDCOLOR IS:", randColor)
        this.setState({colors: newColors});
    }

    render() {
        const boxes = this.state.colors
                .map(color => (<Box color={color}/>));
        return (
        <div className="MegaBox">
            {boxes}
            <button onClick={this.changeRandoBox}>OBAMA 2020</button>
        </div>
        );
    }
}

export default MegaBox;
