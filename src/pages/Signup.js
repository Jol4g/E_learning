import { Form, Input, Button, Radio, Alert } from 'antd';
import React, { Component,  } from 'react'
import Navbar from '../components/Navbar'
import img from '../assets/knowledge.svg'
import Axios from 'axios';

export class Signup extends Component {


constructor(props){
  super(props)
  this.state ={
    error:{}
  }
  this.redirectTo = this.redirectTo.bind()
}



  redirectTo = (lien) => {
    const { history } = this.props;
    if(history) history.push(lien);
  }
  


    render() {
        return (
            <div>
                <Navbar/>
                <div className="container" style={{minWidth:"100%",minHeight:"100%",flexDirection:'row',display:'flex',paddingTop:30,justifyContent:'space-evenly'}}>
                   <div className='login-bloc1' >
                        <div className='lcard1' >
                            
                        <p>Join us now! </p>
                        </div>
                        <div>
                            <img src={img} alt="somepic"
                            className='limg' 
                            style={{
                                position:'fixed',
                                top:"40%",
                                left:"15%",
                                height:"50%",
                                width:"60%",zIndex:-10
                            }}
                            />
                        </div>
                    </div>
                    <div className='sign-bloc2'
                      style={{}}
                    >
                       
  <Form
    {...layout}
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={ 
async (e)=>{
  await Axios.post(
`/api/users`, {user:e}
  ).then(data =>{
          console.log("success ",data)
          localStorage.clear();
          localStorage.setItem('id',data.data._id)
          this.redirectTo('/');
        })
  .catch(err=>
     {console.log(err.response.data);
      this.setState({error:err.response.data})
     })
    }
    
    }
  >
    <Form.Item
      label="CIN"
      name="cin"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Firstname"
      name="firstname"
      rules={[
        {
          required: true,
          message: 'Please input your first name!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      label="Lastname"
      name="lastname"
      rules={[
        {
          required: true,
          message: 'Please input your last name!',
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
          message: 'Please input your E-mail!',
        },
        {
            type:'email',
            message: 'Please input a valid E-mail'
        }
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label="As a " name="type">
          <Radio.Group>
            <Radio.Button value="student">Student</Radio.Button>
            <Radio.Button value="teacher">Teacher</Radio.Button>
          </Radio.Group>
        </Form.Item>
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Sign up
      </Button>
    </Form.Item>
    <Form.Item {...tailLayout}>
      { this.state.error['status'] ? <Alert {...tailLayout} message="Email already used" type="error" />  : null}
    </Form.Item>
   
  </Form>


                    </div>
               </div>
            </div>
        )}
}

export default Signup

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
  },
};
