import { Button, List, PageHeader, Tabs } from 'antd';
import React, { Component } from 'react'
import limg from '../assets/learning.svg' 
import pdf from '../1.pdf'

const { TabPane } = Tabs
export class Course extends Component {
    constructor(props){
        super(props);
        console.log(props.match.params)
        this.state={
            url:props.match.params.name,
            chapiters:[0,0,0,pdf],
            exams:['exam1','exam2','exam3','exam4']
        }
        this.Exams=this.Exams.bind()
        this.Cours=this.Cours.bind()
    }

    Cours = () =>{
        return (
            <div style={{width:"100%"}} >
            <List
                size="small"
                header={<div style={{fontWeight:'bold',fontSize:18}} >Chapiters</div>}
                bordered
                dataSource={this.state.chapiters}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            </div>
        )
    }
    Exams = ()=>
{
    return(
        <div  style={{width:"100%"}} >
        <List
            size="small"
            header={<div style={{fontWeight:'bold',fontSize:18}}>Exams</div>}
            bordered
            dataSource={this.state.exams}
            renderItem={item => <List.Item>{item}</List.Item>}
        />
        </div>
    )

}

    render() {
        return (
            <div className="container" style={{minWidth:"100%",minHeight:"100%",paddingTop:10,}}>
                     <div style={{display:'block',padding:0,width:"100%"}} >
        <PageHeader title='Courses' extra={
            [ <Button
                key='logout'
                onClick={()=>{
                    document.location.pathname='/'
                }}
            >Log out</Button>,]}>
                <Button type='link' onClick={()=>{this.props.history.goBack()}}>Change course</Button>
            </PageHeader>
                </div>
                
                <div style={{display:'flex',flexDirection:'row'}}>
                <Tabs type='card' defaultActiveKey={1} style={{width:"50%"}}>
                    <TabPane tab="courses" key={1}>
                        {this.Cours()}
                    </TabPane>
                    <TabPane tab="exams" key={2}>
                        {this.Exams()}
                    </TabPane>
                </Tabs>
                <div>
                <img
                 src={limg} 
                 alt='learning' 
                 style={{position:'fixed',top:100,height:400,zIndex:-3}}
                 />
                 </div>
                </div>
            </div>
        )
    }
}

export default Course


