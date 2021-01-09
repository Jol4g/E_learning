import Axios from "axios";
import React, {Component} from "react";
import auth from "../auth/auth";
import CourCard from "../components/CourCard";
import Navbar from "../components/Navbar";
import EmptyIMG from '../assets/empty.svg';

export class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListCourse: [],
        };
        this.FetchCoursesToCards = this.FetchCoursesToCards.bind();
        this.empty = this.empty();
        this.courses = this.courses.bind();
    }

    componentDidMount() {
        auth.verif()
        if (auth.isUser()) {
            this.props.history.push('/profile')
        }
        if (auth.isAdmin()) {
            this.props.history.push('/admin')
        }
        if (auth.isTeacher()) {
            this.props.history.push('/teacher')
        }

        Axios.get("/public/all").then((res) => {
            this.setState({ListCourse: res.data});
        });
    }


    courses = () => {
        return (
            <div style={{display:'flex',width:'80%',padding:'20px 0px 0px 20px'}} >
                {this.FetchCoursesToCards()}
            </div>
        )
    }

    FetchCoursesToCards = () => {
        return this.state.ListCourse.map((e) => {
            return <CourCard key={e._id} data={e}/>;
        });
    }

    empty = () => {
        return (

            <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', paddingTop: '100px'
            }}>
                <h3>No courses available</h3><br/>
                <img
                    alt={'empty'}
                    src={EmptyIMG}
                    style={{width: '20%', height: '20%'}}
                />
            </div>
        )
    }

    render() {
        return (
            <div style={{width: '100%', alignItems: 'center'}}>
                <Navbar/>
                {this.state.ListCourse.length > 0 ? this.courses() : this.empty}
            </div>
        );
    }
}

export default Courses;
