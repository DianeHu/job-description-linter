import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="nav nav-pills nav-fill">
                <a className="nav-item nav-link active" href="#">Home</a>
                <a className="nav-item nav-link disabled" href="#">Explore</a>
                <a className="nav-item nav-link disabled" href="#">History (soon to come!)</a>
                <a className="nav-item nav-link disabled" href="#">Suggestions (soom to come!)</a>

            </nav>
        )
    }
}

export default NavBar;