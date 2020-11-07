import { Button, PageHeader } from 'antd';
import React, { Component } from 'react'
import CourseCard from '../components/CourseCard'
import bookimg from '../assets/Books.svg'
import Axios from 'axios';

export class Courses extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{},
            list:[]
        }
    }

    componentWillMount(){
        const id = localStorage.getItem('user')
        Axios.get(`/api/${id}`)
          .then((data)=>{
              this.setState(
                  {
                      user:data.data.data
                  }) 
          
                  Axios.get('/api/:id/courses')
                  .then((data)=>data.data)
                  .then((data)=>{
                      this.setState(
                          {
                              list:data
                          })
                  
                  console.log(this.state)
                  }).catch( err =>{
                      console.log(err)
                  })
          
                }).catch(
              err=>console.log("error: ",err.response)
          )
          
    }
  

    render() {
        const list = this.state.list
        const {firstname, lastname} = this.state.user;
        const username = firstname ? firstname+' '+lastname : "Foulen ben Foulen"
        return (
            <div className="container" style={{minWidth:"100%",minHeight:"100%",paddingTop:10,}}>
                <div style={{display:'block',padding:0,width:"100%"}} >
        <PageHeader title='Courses' extra={
            [<span key='username' style={{paddingRight:50}} >{username}</span>,
            <Button
                key='logout'
                onClick={()=>{
                    // localStorage.clear()
                    document.location.pathname='/logout'
                }}
            >Log out</Button>,]}/>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{display:'flex',flexWrap:"wrap",width:"80%"}}>
                        {
                     list.length !== 0 ?   list.map(e=><CourseCard key={e.id} data={e} />): "No courses for you!"   }
                    </div>
                    <div style={{display:'flex',width:"50%"}}>
                       <img 
                       src={bookimg} 
                       alt='books'
                       style={{
                           position:'fixed',
                           height:"70%",
                           width:"30%"
                       }}
                       />
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses
