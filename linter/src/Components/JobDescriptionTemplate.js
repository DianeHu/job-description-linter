import React, { Component } from 'react';
import NavBar from "./NavBar";
import App from "../App";
import Redirect from "react-router-dom/es/Redirect";

class JobDescriptionTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHomePage: false,
        };
        this.handleClickNo = this.handleClickNo.bind(this);
    }

    handleClickNo() {
        return <Redirect to='/'/>
    }

    render() {
        return (
            <div>
                <header>
                    <NavBar />
                </header>
                <div className="container-fluid">
                    <div className="container col-sm-4">
                        <div className="alert alert-light" role="alert">
                            Do you want to create a custom job description template?
                        </div>
                    </div>
                    <div className="container col-sm-4" >
                        <a className="nav-link" href="/job-description-template-creation">
                            <button type="button" className="btn btn-primary btn-block" >Yes!</button>
                        </a>
                        <a className="nav-link" href="/">
                            <button type="button" className="btn btn-secondary btn-block">Nah I will do it myself.</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobDescriptionTemplate;