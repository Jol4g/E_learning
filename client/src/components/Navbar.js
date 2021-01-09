import { PageHeader } from 'antd'
import Button from 'antd/lib/button/button'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import auth from '../auth/auth'
import "./navbar.css"
import logo from '../assets/future-learn.png';

export class Navbar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let x = this.props.ok;
        return (
            <div
                style={{boxShadow:'0px 0px 5px 1px #ccc'}}
            >
                {x ?
                <PageHeader
                    title={<img width={150} height={50} src={logo}/>}
                   extra={[
                        <Button onClick={()=>auth.logout(()=>{})} key={1} id='link' type="link" >
                            <Link to='/' >
                            Logout
                            </Link>
                            </Button>,
                    ]}

                /> :

                <PageHeader
                    title={<img width={150} height={50} src={logo}/>}
               extra={[
                    <Button key={1} id='link' type="link"  >
                        <Link to='/' >
                        Courses
                        </Link>
                        </Button>,
                    <Button key={2} id='link' type="link" >
                        <Link to='/login' >
                        Login
                        </Link>
                        </Button>,
                ]}

            />
                }

            </div>
        )
    }
}

export default Navbar
