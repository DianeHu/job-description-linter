import React, { Component } from 'react';
import {VetoedWords} from "../Services/WordFinder";
import PostDetails from "../Components/PostDetails";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { posting : '' };

        this.handleJobPostingChange = this.handleJobPostingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleJobPostingChange(event) {
        this.setState({posting: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.highlight();
    }

    highlight() {
        var highlightPairs = VetoedWords(this.state.posting);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" >
                    <label htmlFor="jobPosting" ></label>
                    <PostDetails></PostDetails>
                    <br />
                    <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default FormContainer;