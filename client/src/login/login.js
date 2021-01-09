import React, {Component} from "react";
import {Button, Form, Input} from "antd";

import Navbar from "../components/Navbar";
import Axios from "axios";
import auth from "../auth/auth";


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stat: ""
        };
    }

    componentDidMount() {
        auth.verif();
        if (auth.isUser()) {
            this.props.history.push('/profile')
        }
        if (auth.isAdmin()) {
            this.props.history.push('/admin')
        }
        if (auth.isTeacher()) {
            this.props.history.push('/teacher')
        }
    }

    onFinish = (values) => {
        console.log('Success:', values);
        Axios.post('/users/login', values)
            .then((res) => {
                    console.log(res)
                    // let x = JSON.stringify(res.data.token)
                    if (res.data.token !== "undefined") {
                        localStorage.setItem('auth', res.data.token)
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
            ).catch(err => console.log(err))
    };


    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    render() {

        return (
            <div>
                <Navbar/>

                <br/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}
                >

                    <h1>Connect to your space</h1>
                    <div
                        style={{
                            position:'absolute',
                            top:'200px',
                            height:'250px',
                            borderRadius:20,
                            padding:'10px 30px',
                            alignItems:'center',
                            display:'flex',
                            justifyContent:'center',
                            backgroundColor: '#EEE',
                            boxShadow:'0px 0px 3px 1px #ccc'
                        }}
                    >
                        <Form
                        name="basic"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >

                        <Form.Item
                            wrapperCol={{offset: 2}}
                            label="Email  "
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                },
                                {
                                    message: "Please input your Email!",
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{offset: 0}}
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                }}
                            >
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

                export default Login;
