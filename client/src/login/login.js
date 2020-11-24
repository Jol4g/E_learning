import React, { Component } from "react";
import { Button, Form,Input } from "antd";

import Navbar from "../components/Navbar";
import Axios from "axios";
import auth from "../auth/auth";

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


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stat:""
        };
    }
    componentDidMount(){
      auth.verif();
      if(  auth.isUser() ){this.props.history.push('/profile')}
      if(  auth.isAdmin() ){this.props.history.push('/admin')}
      if(  auth.isTeacher() ){this.props.history.push('/teacher')}
    }

     onFinish = (values) => {
        console.log('Success:', values);
        Axios.post('/users/login',values)
            .then((res)=>{
                console.log(res)
               // let x = JSON.stringify(res.data.token)
                if(res.data !== "undefined"){
                localStorage.setItem('auth',res.data.token)
                let role = auth.login(res.data.token)
                switch (role) {
                  case "user":
                    document.location.replace('/profile')    
                    break;
                
                    case "admin":
                      document.location.replace('/admin')    
                      break;
                    
                  case "teacher":
                    document.location.replace('/teacher')    
                    break;
                  default:
                    break;
                }
              
              }
                
            }
        ).catch(err=>console.log(err))
      };


     onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   

  render() {

    return (
      <div>
        <Navbar />
        <h1>Login cours </h1>
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
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
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
          <Form.Item {...tailLayout}>{this.state.stat}</Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
