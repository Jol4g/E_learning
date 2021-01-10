import { Button, Form,Input } from "antd";
import Axios from "axios";
import React, { Component } from "react";
import auth from "../auth/auth";
import Navbar from "../components/Navbar";




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
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',

          }}
          >
          <h1
              style={{
                  paddingTop:30,

              }}
          >
              Inscription to {x} course</h1>
          <div
              style={{
                  position:'absolute',
                  top:'200px',
                  height:'300px',
                  width:'340px',
                  borderRadius:20,
                  padding:'20px 0px 0px 0px',
                  alignItems:'center',
                  display:'flex',
                  justifyContent:'center',
                  backgroundColor: '#ffffff',
                  boxShadow:'0px 0px 3px 1px #ccc'
              }}
          >
        <Form
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
            labelCol={{span:6}}
            rules={[
              {
                message: "Please input your Prenom!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
              labelCol={{span:6}}
            label="Nom"
            name="last_name"
            rules={[
              {
                message: "Please input your Nom!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item

              labelCol={{span:6}}
            label="Email"
            name="email"

            rules={[  {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item

              labelCol={{span:6}}
            label="Password"
            name="password"
            rules={[
              {
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>


          <Form.Item

              labelCol={{span:6}}>

            <Button
                style={{
                    display: 'flex',
                    width: '100%',
                    alignContent: 'center',
                    justifyContent: 'center'
                }}
                type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
            {this.state.stat}

        </Form>
          </div>
          </div>
      </div>
    );
  }
}

export default Inscription;
