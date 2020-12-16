import React, { Component } from 'react'
import {Menu, message} from 'antd'
import axios from 'axios'
import AddCourse from './addCourse'
import DeleteCourse from './deleteCourse'
import Navbar from '../components/Navbar'
export class Admin extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            current : '1'
        }

    }
    componentDidMount(){
        message.success('Welcome Admin',2);
        axios.get('/user/getChapter').then(
            (doc)=>{
                console.log(doc.data)
                this.setState({courses:doc.data})
            }
        )
    }

    handleClick =(e)=>{
        this.setState({current:e.key})
    }
    render() {
        let {current} = this.state
        return (
            <div>
                <Navbar ok={true} />
               <h1> Admin </h1>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                    <Menu.Item key={1} >add course</Menu.Item>                    
                    <Menu.Item key={2}> manage course</Menu.Item>
                </Menu>
                {current === '1' ? <AddCourse/> : <DeleteCourse courses={this.state.courses} /> }
            </div>
        )
    }
}

export default Admin
