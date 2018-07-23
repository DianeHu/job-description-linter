import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    handleClick = () => {
        this.props.clickHandler(this.textArea);
    };

    render() {
        return (
            <div className="NavBar">
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}