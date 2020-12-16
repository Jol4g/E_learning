import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Button, Checkbox, message } from 'antd';
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
export class AddCourse extends Component {

    constructor(props){
        super(props);
        this.onFinish = this.onFinish.bind();
        this.onFinishFailed = this.onFinishFailed.bind();
    }
 onFinish = (values) => {
   values.isrole = 'teacher'
   axios.post('/user/addCourse',values)
        .then(res=>{
           message.success('Success:'+JSON.stringify(values),2);})
        .catch(err=>{
          message.error('error',2);
          console.log(err)
        })

      };
    
 onFinishFailed = (errorInfo) => {
        message.error('Failed:',1);
      };
    
    render() {
        return (
            <div>
              <br/><br/>
                <div>
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
        label="First name"
        name="first_name"
        rules={[
          {
            required: true,
            message: 'Please input your firstname',
          },
        ]}
      >
        <Input />
      </Form.Item>
         <Form.Item
        label="Last name"
        name="last_name"
        rules={[
          {
            required: true,
            message: 'Please input your lastname',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
          {
            type:"email",
            message: "invalid E-mail!"
          }
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
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Categorie"
        name="categorie"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.TextArea/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
                </div>
            </div>
        )
    }
}

export default AddCourse
