import Axios from "axios";
import React, { Component } from "react";
import auth from "../auth/auth";
import CourCard from "../components/CourCard";
import Navbar from "../components/Navbar";

export class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListCourse: [],
    };
    this.FetchCoursesToCards = this.FetchCoursesToCards.bind();
  }
  componentDidMount() {
     auth.verif() 
      if(  auth.isUser() ){this.props.history.push('/profile')}
      if(  auth.isAdmin() ){this.props.history.push('/admin')}
      if(  auth.isTeacher() ){this.props.history.push('/teacher')}

    Axios.get("/public/all").then((res) => {
      this.setState({ ListCourse: res.data });
    });
  }

  FetchCoursesToCards = () => {
    return  this.state.ListCourse.map((e) => {
     return <CourCard key={e._id} data={e} />;
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.ListCourse.length > 0 ? this.FetchCoursesToCards() : "no"}
      </div>
    );
  }
}

export default Courses;
