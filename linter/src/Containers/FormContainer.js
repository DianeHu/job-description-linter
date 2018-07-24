import React, { Component } from 'react';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.handleJobPostingChange = this.handleJobPostingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleJobPostingChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" >
                    <label htmlFor="jobPosting" ></label>
                    <textarea className="form-control" id="jobPosting" value={this.props.name} onChange={this.handleJobPostingChange} rows="15"/>

                    <br />

                    <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default FormContainer;