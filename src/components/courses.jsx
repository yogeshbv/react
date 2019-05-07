import React, { Component } from 'react';

class Course extends Component {
    state = { 
        title : 'Course Component',
        listCourse: false,
        count: 0,
        imgUrl: "http://lorempixel.com/400/200/sports/",
        courseList: ['Course-1', 'Course-2', 'Course-3'],
        active: true
     }

    //  constructor() {
    //      super();
    //      console.log(this);
    //     this.handleIncrement = this.handleIncrement.bind(this)
    //  }

     renderCourses() {
         if (this.state.courseList.length === 0) return <p>No courses available yet!</p>

         return <ul className="list-group">
         { this.state.courseList.map(item => <li className="list-group-item" key={item}>{item}</li>)}
         {/* <li>Course1</li>
         <li>Course1</li>
         <li>Course1</li> */}
        </ul>
     }

     handleIncrement = () => {
         console.log("click handled... : ", this);
        //  this.state.count++;
         this.setState({ count: this.state.count + 1  })
     }

     style = {
         width: "200px",
         height: "200px"
     }
    render() { 
        return (
            <> 
                {/* <button className={this.getButtonClass()}>Save</button>
                <h1>{this.state.title}</h1>
                <img src={this.state.imgUrl} style={this.style}></img>*/}
                <button onClick={this.listCourses}>List ourses</button> 
                <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
                <p>Count is : {this.state.count}</p>
                {this.state.listCourse ?
                    <>
                    <h3>All courses</h3>
                    { this.renderCourses() }
                    </> : null
                }
                
            </>
         );
    }

    getButtonClass() {
        return (this.state.active) ? "btn btn-success" : "btn btn-danger";
    }

    

    listCourses = () => {
        console.log("I am inside");
        this.setState({listCourse: !this.state.listCourse});
    }
    
}
 
export default Course;