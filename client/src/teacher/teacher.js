import {Button, message, Tabs} from "antd";
import JWT from "jsonwebtoken";
import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Course from "./Course";

export class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
    }

    componentDidMount() {
        let token = localStorage.getItem("auth");
        let decode = JWT.decode(token);
        this.setState({user: decode});
        message.success('Welcome Teacher :)',2);
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div>
                <Navbar ok={true}/>
                <h2
                    style={{padding:'30px 10px 0px 100px',color:'#545454'}}
                >Bonjour {this.state.user.first_name + " " + this.state.user.last_name}</h2>
                <Tabs>
                    <Tabs.TabPane
                    >
hi
                    </Tabs.TabPane>
                    <Tabs.TabPane
                        tab="Manage course" key="1"
                    >
                        <Course user={this.state.user}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane
                        tab="Manage exam" key="2"
                    >

                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Teacher
