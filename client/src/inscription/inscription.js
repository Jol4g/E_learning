import { Button, Form,Input } from "antd";
import Axios from "axios";
import React, { Component } from "react";
import auth from "../auth/auth";
import Navbar from "../components/Navbar";
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    }};



export class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Course: {category:""},
          user:{},
          stat:""
        };
    }
     onFinish = (values) => {
        values.cours=this.state.Course._id
        console.log('Success:', values);
        Axios.post('/users/register',values)
            .then((res)=>{
                console.log(res)
                this.setState({stat:res.data.message})

                document.location.replace('/login')
            }
        ).catch(err=>console.log(err))
      };


     onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   
  componentDidMount(){

    auth.verif();
    if(  auth.isUser() ){this.props.history.push('/profile')}
    if(  auth.isAdmin() ){this.props.history.push('/admin')}
    if(  auth.isTeacher() ){this.props.history.push('/teacher')}

    let x = localStorage.getItem('courseID')
    x = JSON.parse(x);
    this.setState({Course:x})
  }

  render() {
    const x = this.state.Course.category || "!"
    return (
      <div>
          <Navbar/>
          <h1>Inscription cours {x}</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Prenom"
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please input your Prenom!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nom"
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please input your Nom!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            
            rules={[  {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              inscrire
            </Button>
          </Form.Item>
          <Form.Item {...tailLayout}>
            {this.state.stat}
          </Form.Item>
          
        </Form>
      </div>
    );
  }
}

export default Inscription;
