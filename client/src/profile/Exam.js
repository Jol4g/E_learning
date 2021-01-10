import {BackTop, Button, message, Modal} from "antd";
import JWT from "jsonwebtoken";
import React, {Component} from "react";
import Navbar from "../components/Navbar";
import QuestionBox from "../components/QuestionBox";

export class Exam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            user: {},
        };
        this.onBack = this.onBack.bind()
        this.onCancel = this.onCancel.bind()
        this.onQuit=this.onQuit.bind()
    }

    onBack = () => {
        this.setState({visible: true});
    }
    onQuit = () => {

        this.setState({visible: false});
        this.state.user.point = 10;
        this.props.history.push('/')
    }
    onCancel = () => {
        this.setState({visible: false});
    }

    componentDidMount() {
        let token = localStorage.getItem("auth");
        let decode = JWT.decode(token);
        this.setState({user: decode});
        message.info('Stay cool!', 2).then(r => console.log(r));
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
                        color: '#545454'
                    }}
                >
                    <Button type={'link'} onClick={() => {
                        this.onBack()
                    }}>
                        Back
                    </Button> Bon chance {this.state.user.first_name + " " + this.state.user.last_name}
                </h2>
                <Modal
                    visible={this.state.visible}
                    centered
                    onOk={() => this.onQuit()}
                    onCancel={() => this.onCancel()}
                    footer={[
                        <Button key="cancel" onClick={()=>this.onCancel()}>
                            Cancel
                        </Button>,
                        <Button key="quit" type={'danger'} onClick={()=>this.onQuit()}>
                            Quit
                        </Button>,

                    ]}
                >
                    <p>Are you sure to quit exam now. </p>
                    <p> you have one chance. </p>
                    <p> you are not able to repeat again. </p>
                    <p> think wisely.</p>
                </Modal>
                <section>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>
                    <QuestionBox/>

                </section>
                <footer>
                    <Button>Submit</Button>
                </footer>
                <BackTop>

                </BackTop>
                <br/>

            </div>
        );
    }
}

export default Exam;
