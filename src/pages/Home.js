import Button from 'antd/lib/button/button'
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import img from '../assets/studying.svg'
import { Link } from 'react-router-dom'
export class Home extends Component {
    
    render() {
        return (
            <div>
            <Navbar/>
            <div className="container" style={{flexDirection:"row",width:"100%"}}>
               <div className="home-container" >
               <h2 className='title'>Self education resources</h2>
                <div className="home-text">
                    <p 
                    style={{fontFamily:'Rubik',fontWeight:"lighter",color:"#4B4B4B",fontSize:25,lineHeight:2}}
                    > Explore and learn new skills</p>
                </div>
                <Button className='Butt' shape="round"  >
                    <p className='join'>
                    <Link to='/login' >
                        Join us
                    </Link>    
                    </p>
                    </Button>
            </div>
                <img
                    style={{
                        position:'fixed',
                        top:'15%',
                        left:'30%',
                        height:"90%",zIndex:-90}}
                src={img} alt='studying' />
            </div>
            </div>
        )
    }
}

export default Home
