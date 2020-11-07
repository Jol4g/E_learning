import { Button } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './coursecard.css'

export class CourseCard extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }
    render() {
        const {title, duree, completed, to} = this.props.data
        return (
            <div className='coursecard' style={{width:300,height:200,borderRadius:25,border:'solid 1px #333333',padding:30,margin:20,backgroundColor:"#5500ff05"}}>
                <div >
                   <p id="title">{title}</p>
                </div>
                <div >
                    <p>Duration {duree} hours</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div>
                Status: <p style={completed?{color:'green'}:{color:'red'}}>{completed ? "completed ":"not completed"}</p> 
                </div>
                <div> 
                    <Button>
                        <Link to={`courses/${to}`} >
                       Enter
                       </Link> 
                    </Button>
                </div>
                </div>
            </div>
        )
    }
}

export default CourseCard

CourseCard.defaultProps = {
    to:''
}