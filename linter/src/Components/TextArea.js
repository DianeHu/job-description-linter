import React, { Component } from 'react';

export default function TextArea(props){
    return(
        <div class="card">
            <div class="card-body">
                <div class="card-header">Job description</div>
                <div class="form-group">
                    <textarea class="form-control" rows="5"></textarea>
                </div>
            </div>
        </div>
    );
}