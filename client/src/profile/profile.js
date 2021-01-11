import {Button, message} from "antd";
import JWT from "jsonwebtoken";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import './profile.css';
import ListItem from "../components/ListItem";
import axios from "axios";
export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            files:[],
        };
    }

    componentDidMount() {
        let token = localStorage.getItem("auth");
        let decode = JWT.decode(token);
        this.setState({user: decode});
        message.success('Welcome back :)',2);
        axios.get('user/getFiles')
            .then((data)=>{
                console.log(data.data)
                this.setState({files:data.data.files})
            })
    }

    componentWillUnmount() {

    }

    render() {
        const {first_name, last_name, point} = this.state.user;
        return (
            <div>
                <Navbar ok={true}/>
                <div
                    style={{
                        padding: '30px',
                    }}
                >
                    <h2
                        style={{color:'#545454'}}
                    >Bonjour {first_name + " " + last_name}</h2>


                    <div style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{display: 'flex', flexDirection: 'column', width: "80%"}}>
                            <h1>
                                Course
                            </h1>
                            <ul id={'list'} style={{listStyle: "none"}}>
                                {this.state.files.length>0 ? this.state.files.map((file)=> {
                                    return (<ListItem key={this.state.files.indexOf(file)} file={file}/>)
                                }): null}

                            </ul>
                        </div>
                        <div
                            style={{
                                padding:20,
                                marginTop:0,
                                alignItems:'center',
                                display: 'flex',
                                flexDirection: 'column',
                                minWidth: '30%',
                                height:'80%',
                                textAlign: 'center',
                                backgroundColor:'transparent',
                                borderRadius:5,
                                boxShadow:'0px 0px 5px 1px #ccc'
                            }}
                        >
                            <Button
                                disabled={point > -1 ? true : false}
                                key={1}
                                id="link"
                                type="link"
                            >
                                <Link to="/exam">Exam</Link>
                            </Button>
                            Status
                            : {point === -1 ? "passe le QCM avec +70% pour reussir" : point > 70 ? "reussie avec " + point + "%" : "refusee avec " + point + "%"}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
