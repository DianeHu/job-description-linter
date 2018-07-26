import React, { Component } from 'react';
import NavBar from "./NavBar";
import Redirect from "react-router-dom/es/Redirect";

class JobDescriptionTemplateCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitleCompleted: false,
            jobTitle: '',
            levelCompleted: false,
            level: '',
            jobOverviewCompleted: false,
            jobOverview: '',
            responsibilities1Completed: false,
            responsibilities2Completed: false,
            responsibilities3Completed: false,
            responsibilities1: '',
            responsibilities2: '',
            responsibilities3: '',
            qualifications1Completed: false,
            qualifications2Completed: false,
            qualifications3Completed: false,
            qualifications1: '',
            qualifications2: '',
            qualifications3: '',
        };
        this.handleClickJobTitleConfirm = this.handleClickJobTitleConfirm.bind(this);
        this.handleClickLevelConfirm = this.handleClickLevelConfirm.bind(this);
        this.handleClickJobOverviewConfirm = this.handleClickJobOverviewConfirm.bind(this);
        this.handleClickResponsibilitiesConfirm = this.handleClickResponsibilitiesConfirm.bind(this);
        this.handleClickQualificationsConfirm = this.handleClickQualificationsConfirm.bind(this);
    }

    handleClickJobTitleConfirm() {
        this.setState({
            jobTitleCompleted: true,
            jobTitle: document.getElementById("job-title").value
        });
    }

    handleClickLevelConfirm() {
        this.setState({
            levelCompleted: true,
            level: document.getElementById("level").value
        });
    }

    handleClickJobOverviewConfirm() {
        this.setState({
            jobOverviewCompleted: true,
            jobOverview: document.getElementById("job-overview").value
        });
    }

    handleClickResponsibilitiesConfirm() {
        this.setState({
            responsibilities1Completed: true,
            responsibilities2Completed: true,
            responsibilities3Completed: true,
            responsibilities1: document.getElementById("responsibilities1").value,
            responsibilities2: document.getElementById("responsibilities2").value,
            responsibilities3: document.getElementById("responsibilities3").value
        });
    }

    handleClickQualificationsConfirm() {
        this.setState({
            qualifications1Completed: true,
            qualifications2Completed: true,
            qualifications3Completed: true,
            qualifications1: document.getElementById("qualifications1").value,
            qualifications2: document.getElementById("qualifications2").value,
            qualifications3: document.getElementById("qualifications3").value
        });
    }

    render() {
        if (!this.state.jobTitleCompleted) {
            return (
                <div>
                    <header>
                        <NavBar/>
                    </header>
                    <form>
                        <br/>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="jobTitle" className="card-header title">Select the job title</label>

                                <br/>

                                <select className="form-control" id="job-title">
                                    <option>Software Engineer I</option>
                                    <option>Software Engineer II</option>
                                    <option>Senior Software Engineer</option>
                                    <option>Principal Software Engineer</option>
                                </select>

                                <br/>

                                <button type="button" className="btn btn-primary"
                                        onClick={this.handleClickJobTitleConfirm}>Confirm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else if (!this.state.levelCompleted) {
            return (
                <div>
                    <header>
                        <NavBar/>
                    </header>
                    <form>
                        <br/>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="jobTitle" className="card-header title">{this.state.jobTitle}</label>
                            </div>
                        </div>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="level" className="card-header title">Select the level</label>

                                <br/>

                                <select className="form-control" id="level">
                                    <option>59</option>
                                    <option>60</option>
                                    <option>61</option>
                                    <option>62</option>
                                    <option>63</option>
                                    <option>64</option>
                                    <option>65</option>
                                </select>

                                <br/>

                                <button type="button" className="btn btn-primary"
                                        onClick={this.handleClickLevelConfirm}>Confirm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else if (!this.state.jobOverviewCompleted) {
            return (
                <div>
                    <header>
                        <NavBar/>
                    </header>
                    <form>
                        <br/>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="jobTitle" className="card-header title">{this.state.jobTitle}</label>
                            </div>
                        </div>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="level" className="card-header title">{this.state.level}</label>
                            </div>
                        </div>
                        <div className="container col-sm-5">
                            <div className="card results">
                                <div className="card-header title">Job Overview (with default in the text area)</div>
                                <textarea className="highlight form-control" rows="10" id="job-overview">We are looking for a passionate Software Engineer to design, develop and install software solutions.

Ultimately, the role of the Software Engineer is to build high-quality, innovative and fully performing software that complies with coding standards and technical design.</textarea>

                                <button type="button" className="btn btn-primary"
                                        onClick={this.handleClickJobOverviewConfirm}>Confirm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else if (!this.state.responsibilities1Completed || ! this.state.responsibilities2Completed || !this.state.responsibilities3Completed) {
            return (
                <div>
                    <header>
                        <NavBar/>
                    </header>
                    <form>
                        <br/>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="jobTitle" className="card-header title">{this.state.jobTitle}</label>
                            </div>
                        </div>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="level" className="card-header title">{this.state.level}</label>
                            </div>
                        </div>
                        <div className="container col-sm-5">
                            <div className="card results">
                                <label htmlFor="job-overview" className="card-header title">{this.state.jobOverview}</label>
                            </div>
                        </div>
                        <div className="container col-sm-4">
                            <div className="card results">
                                <div className="card-header title">Top 3 responsibilities</div>

                                <br />
                                <textarea className="highlight form-control" rows="2" id="responsibilities1"></textarea>
                                <br />
                                <textarea className="highlight form-control" rows="2" id="responsibilities2"></textarea>
                                <br />
                                <textarea className="highlight form-control" rows="2" id="responsibilities3"></textarea>

                                <br />

                                <button type="button" className="btn btn-primary"
                                        onClick={this.handleClickResponsibilitiesConfirm}>Confirm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else if (!this.state.qualifications1Completed || !this.state.qualifications2Completed || !this.state.qualifications3Completed) {
            return (
                <div>
                    <header>
                        <NavBar/>
                    </header>
                    <form>
                        <br/>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="jobTitle" className="card-header title">{this.state.jobTitle}</label>
                            </div>
                        </div>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="level" className="card-header title">{this.state.level}</label>
                            </div>
                        </div>
                        <div className="container col-sm-5">
                            <div className="card results">
                                <label htmlFor="job-overview" className="card-header title">{this.state.jobOverview}</label>
                            </div>
                        </div>

                        <br />

                        <div className="container col-sm-4">
                            <div className="card-header title">
                                <div className="card-header title">Top 3 responsibilities</div>

                                <ol>
                                    <li>{this.state.responsibilities1}</li>
                                    <li>{this.state.responsibilities2}</li>
                                    <li>{this.state.responsibilities3}</li>
                                </ol>
                            </div>
                        </div>

                        <div className="container col-sm-4">
                            <div className="card results">
                                <div className="card-header title">Top 3 qualifications</div>

                                <br />
                                <textarea className="highlight form-control" rows="2" id="qualifications1"></textarea>
                                <br />
                                <textarea className="highlight form-control" rows="2" id="qualifications2"></textarea>
                                <br />
                                <textarea className="highlight form-control" rows="2" id="qualifications3"></textarea>

                                <br />

                                <button type="button" className="btn btn-primary"
                                        onClick={this.handleClickQualificationsConfirm}>Confirm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <header>
                        <NavBar/>
                    </header>
                    <form>
                        <br/>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="jobTitle" className="card-header title">{this.state.jobTitle}</label>
                            </div>
                        </div>
                        <div className="container col-sm-4">
                            <div className="form-group card results">
                                <label htmlFor="level" className="card-header title">{this.state.level}</label>
                            </div>
                        </div>
                        <div className="container col-sm-5">
                            <div className="card results">
                                <label htmlFor="job-overview" className="card-header title">{this.state.jobOverview}</label>
                            </div>
                        </div>

                        <br />

                        <div className="container col-sm-4">
                            <div className="card-header title">
                                <div className="card-header title">Top 3 responsibilities</div>

                                <ol>
                                    <li>{this.state.responsibilities1}</li>
                                    <li>{this.state.responsibilities2}</li>
                                    <li>{this.state.responsibilities3}</li>
                                </ol>
                            </div>
                        </div>

                        <br />

                        <div className="container col-sm-4">
                            <div className="card-header title">
                                <div className="card-header title">Top 3 qualifications</div>

                                <ol>
                                    <li>{this.state.qualifications1}</li>
                                    <li>{this.state.qualifications2}</li>
                                    <li>{this.state.qualifications3}</li>
                                </ol>
                            </div>
                        </div>

                        <div className="container col-sm-4">
                            <div className="card results">
                                <button type="button" className="btn btn-primary">Post?
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default JobDescriptionTemplateCreation;