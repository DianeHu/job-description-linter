import React, { Component } from 'react';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobPosting: ''
        };

        this.handleJobPostingChange = this.handleJobPostingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleJobPostingChange(event) {
        this.setState({jobPosting: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea onChange={this.handleJobPostingChange} />
                </label>

                <br />

                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormContainer;