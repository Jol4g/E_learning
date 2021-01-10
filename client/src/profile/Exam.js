import {Button, message, Modal, Tabs} from "antd";
import JWT from "jsonwebtoken";
import React, {Component} from "react";
import Navbar from "../components/Navbar";
import QuestionBox from "../components/QuestionBox";

export class Exam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            user: {},
        };
        this.onBack= this.onBack.bind()
        this.onCancel = this.onCancel.bind()
    }

    onBack=()=>{
        this.setState({visible:true});
    }
    onQuit = () => {
        this.state.user.point = 10;
        this.props.history.push('/')
    }
    onCancel=()=>{
        this.setState({visible:false});
    }
    componentDidMount() {
        let token = localStorage.getItem("auth");
        let decode = JWT.decode(token);
        this.setState({user: decode});
        message.info('Stay cool!', 2);
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div>
                <Navbar ok={true}/>

                <h2
                    style={{
                        padding: '30px 10px 0px 80px',
                        color: '#545454'}}
                >
                    <Button onClick={()=> {
                        this.onBack()
                    }}  >
                        Back
                    </Button>   Bon courage {this.state.user.first_name + " " + this.state.user.last_name}
                </h2>
                <Modal
                    visible ={this.state.visible}
                    centered
                    onOk={()=>this.onQuit()}
                    onCancel={()=>this.onCancel()}
                >
<p>some text</p>
                </Modal>
                <section>
                    <QuestionBox />
                </section>

            </div>
        );
    }
}

export default Exam;
