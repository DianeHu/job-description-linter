import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory} from 'react-router';
import JobDescriptionTemplate from "./Components/JobDescriptionTemplate";
import JobDescriptionTemplateCreation from "./Components/JobDescriptionTemplateCreation";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route>
            <Route path="/" component={App}/>
            <Route path="/job-description-template" component={JobDescriptionTemplate}/>
            <Route path="/job-description-template-creation" component={JobDescriptionTemplateCreation}/>
        </Route>
    </Router>,
    document.getElementById('root'));

registerServiceWorker();
