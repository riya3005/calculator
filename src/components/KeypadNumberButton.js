import React, { Component } from 'react'


class KeypadNumberButton extends Component {
    render() {
        return (
                <button name={this.props.val} onClick={e => this.props.onClick(e.target.name)}> {this.props.val} </button>
        )
    }
}

export default KeypadNumberButton
