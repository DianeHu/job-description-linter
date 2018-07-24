import React, { Component } from 'react';
import {VetoedWords} from "../Services/WordFinder";
import PostDetails from "../Components/PostDetails";

class FormContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PostDetails></PostDetails>
        )
    }
}

export default FormContainer;