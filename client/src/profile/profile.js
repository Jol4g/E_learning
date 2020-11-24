import { Button } from "antd";
import JWT from "jsonwebtoken";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    let token = localStorage.getItem("auth");
    let decode = JWT.decode(token);
    this.setState({ user: decode });
  }
  componentWillUnmount(){

  }
  
  render() {
    const { first_name, last_name, point } = this.state.user;
    return (
      <div>
        <Navbar ok={true} />
        <div>
          <h2>Bonjour {first_name + " " + last_name}</h2>
        </div>

        <div style={{display:'flex',flex:1,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
          <div style={{display:'flex',flexDirection:'column',width:"80%"}}>
            <h1>Cours</h1>
            <ul>
            <li>sad</li>
            <li>sad</li>
            <li>sad</li>
                <li>sad</li>
                <li>sad</li>
                <li>sad</li>
            </ul>
          </div>
          <div style={{display:'flex',flexDirection:'column',minWidth:'30%',textAlign:'center'}}>
            <Button
              disabled={point > -1 ? true : false}
              key={1}
              id="link"
              type="link"
            >
              <Link to="/exam">Exam</Link>
            </Button>
            Status : { point === -1 ? "passe le QCM avec +70% pour reussir": point>70 ?"reussie avec "+point+"%":"refusee avec "+point+"%"}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
