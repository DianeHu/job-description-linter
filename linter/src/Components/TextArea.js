import React, { Component } from 'react';
import $ from 'jquery';
import 'Styling/TextArea.css';

class TextArea extends Component {
    constructor(props) {
        super(props);

        var uaTemp = window.navigator.userAgent.toLowerCase();
        this.state = {
            ua: uaTemp,
            isIE: !!uaTemp.match(/msie|trident\/7|edge/),
            isWinPhone: uaTemp.indexOf('windows phone') !== -1,
            isIOS: uaTemp.indexOf('windows phone') !== -1 && !!uaTemp.match(/ipad|iphone|ipod/)
        };

        this.bindEvents();
    }

    applyHighlights(text) {
        text = text
            .replace(/\n$/g, '\n\n')
            .replace(/[A-Z].*?\b/g, '<mark>$&</mark>');

        if (this.state.isIE) {
            // IE wraps whitespace differently in a div vs textarea, this fixes it
            text = text.replace(/ /g, ' <wbr>');
        }

        return text;
    }

    handleInput(event) {
        var text = event.target.value;
        var highlightedText = this.applyHighlights(text);
        $('.highlights').html(highlightedText);
    }

    handleScroll() {
        var scrollTop = $('textarea').scrollTop();
        $('.backdrop').scrollTop(scrollTop);

        var scrollLeft = $('textarea').scrollLeft();
        $('.backdrop').scrollLeft(scrollLeft);
    }

    fixIOS() {
        $('.highlights').css({
            'padding-left': '+=3px',
            'padding-right': '+=3px'
        });
    }

    bindEvents() {
        $('textarea').on({
            'input': this.handleInput,
            'scroll': this.handleScroll
        })

        var uaTemp = window.navigator.userAgent.toLowerCase();
        if(uaTemp.indexOf('windows phone') !== -1 && !!uaTemp.match(/ipad|iphone|ipod/)) {
            this.fixIOS();
        }
    }

    render() {
        return(
            <div class="card">
                <div class="card-body">
                    <div class="card-header">Job description</div>
                    <div class="form-group">
                        <div class="container">
                            <div class="backdrop">
                                <div class="highlights"></div>
                            </div>
                            <textarea onChange="handleInput" class="form-control" rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}