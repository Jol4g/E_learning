import { PageHeader } from 'antd'
import Button from 'antd/lib/button/button'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
export class Navbar extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    title="fedi"
                    extra={[
                        <Button key={1} id='link' type="link"  >
                            <Link to='/home' >
                            Home
                            </Link>
                            </Button>,
                        <Button key={2} id='link' type="link" >
                            <Link to='/' >
                            Login
                            </Link>
                            </Button>,
                        <Button key={3} id='link' type="link" >
                           <Link to='/signup' >
                            Signup
                            </Link>
                            </Button>,
                    ]}
                >
                </PageHeader>
            </div>
        )
    }
}

export default Navbar
