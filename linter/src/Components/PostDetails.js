import React, { Component } from 'react';
import $ from 'jquery';

class PostDetails extends Component {
    constructor(props) {
        super(props);
    }

    applyHighlights(event) {
        var text = event.target.value;
        console.log("hit");
        $('.my-textarea').highlightWithinTextarea({
            highlight: 'please' // string, regexp, array, function, or custom object
        });
    }

    render() {
        return(
            <div class="card">
                <div class="card-body">
                    <div class="card-header">Job description</div>
                    <div class="form-group">
                        <textarea onChange={this.applyHighlights} class="form-control" rows="5"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostDetails;