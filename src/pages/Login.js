import { Form, Input, Button, Checkbox, Alert } from 'antd';
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import img from '../assets/knowledge.svg'
import Axios from 'axios';
import { connect } from 'react-redux';
import { checkUser } from '../actions/user';


export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      error:''
    }
  }

  
  componentDidUpdate(prev,prevState){
    if(this.props.user !== prevState.user)
    this.setState({user:this.props.user})
  }



  render() {

    
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

        return (
            <div>
                <Navbar/>
                <div className="container" style={{minWidth:"100%",minHeight:"100%",paddingTop:30,alignContent:'center',alignItems:'center',alignSelf:'center'}}>
                   <div className='login-bloc1' >
                        <div className='lcard1' >
                        <p>Login now! </p>
                        </div>
                    </div>
                    <div className='login-bloc2' >
                       <div className='sf'>
                       
                       <Form
    {...layout}
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={
      async (e)=>{
       alert(e.username+" "+e.password+" remember:"+e.remember)
      await this.props.login(e.username,e.password)
      localStorage.setItem('id',this.state.user._id)
      localStorage.setItem('type',this.state.user.type)
      
      // document.location.pathname=`/${this.state.user._id}/courses`
      this.setState({error:'Email or Passsword invalid'})
      }
    }
  >
    <Form.Item
      label="Username"
      name="username"
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

    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
  {/* k3qByuih */}
  <Form>
    <Form.Item {...tailLayout}>
{  this.state.error  ?  <Alert type='error' message={this.state.error} /> : null }    
    </Form.Item>
  </Form>
                        </div>
                    </div>
                    <img src={img} alt="login"
                            className='limg' 
                            style={{
                                position:'fixed',
                                top:"40%",
                                left:"0%",
                                height:"50%",
                                width:"60%",zIndex:-10
                            }}
                            />
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
 return {
  user: state.user 
 }
}
const mapDispatchToProps = (dispatch) => {
  return {
      login: (email,password)=> dispatch(checkUser(email,password))
  }
}

export default connect( mapStateToProps, mapDispatchToProps,)(Login)

