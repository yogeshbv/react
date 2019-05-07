import React, { Component } from 'react';
import {Course} from './courses';

class Header extends Component, Course {
    constructor() {
        super();
    }
    state = { 
        listClick : false,
     }
    
    render() {
        return(
                <header>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-5 font-weight-normal">Company name</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <a className="p-2 text-dark" onClick={this.listClicked}>List</a>
                            <a className="p-2 text-dark" href="#">Progress</a>
                        </nav>
                    </div>
                </header>
        );
    }
    listClicked = () => {
        this.setState({listing: !this.state.listClick});
        if(this.state.listClick) {
            Course.bind(this.state.listCourses)
        }
    }
}

export default Header;
