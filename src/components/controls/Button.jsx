import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render()  {
        return (
        <div className="button" onClick={this.props.onclick}>{this.props.text}</div>
        );
    }

}