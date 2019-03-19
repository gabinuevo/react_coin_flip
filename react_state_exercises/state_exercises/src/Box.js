import React, { Component } from 'react';

class Box extends Component {

    render() {
        const style = {
            backgroundColor: this.props.color,
            height: 100,
            width: 100,
            display: 'inline-block'
        }
        return (
        <div className="Box" id={this.id} style={style}>
        </div>
        );
    }
}

export default Box;
