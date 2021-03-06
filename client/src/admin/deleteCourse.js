import React, {Component} from 'react'
import {Button, Card} from 'antd';
import Axios from 'axios';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 10,
    },
};

export class DeleteCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
        this.fetchCourses = this.fetchCourses.bind()
        this.handleRemove = this.handleRemove.bind()
    }

    componentDidMount() {
        this.setState({courses: this.props.courses})
    }

    handleRemove = (category) => {
        let Deleted = this.state.courses.filter((id) => id.category == category)
        let Filtred = this.state.courses.filter((id) => id.category != category)
        this.setState({courses: Filtred})
        this.setState({DeletedCourses: Deleted})
    }


    handleRefresh = () => {
        Axios.get('/user/getChapter')
            .then(data => {
                this.setState({courses: data.data})
            })
    }
    fetchCourses = () => {
        return this.state.courses.map((data) => {
            return <Card
                title={data.category}
                style={{margin:10,width: '250px', maxHeight: '200px', overflow: 'hidden', boxShadow:' 0px 0px 10px 1px #ddd '}}
                extra={<a onClick={() => this.handleRemove(data.category)}>X</a>}>
                <p>{data.description}</p>
            </Card>
        })
    }

    render() {
        return (
            <div
                style={{
                    padding:20,
                }}
            >
                <pre style={{
                    marginLeft:10,
                    display:'flex',
                    justifyItems:'baseline',
                }}>
                    <Button
                        onClick={() => this.handleRefresh()}
                    >
                        Refresh
                    </Button>
                    <p>   </p>
                    <Button>
                        Update
                    </Button>
                </pre>
                <div
                    style={{
                        display: "flex",
                        flexDirection: 'row'
                    }}>
                    {this.state.courses ? this.fetchCourses() : "no courses yet"}
                </div>
            </div>
        )
    }
}

export default DeleteCourse
