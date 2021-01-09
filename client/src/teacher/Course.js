import React from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom";

const Course = (props) => {
    const {first_name, last_name, point} = props.user;
    return(
    <div
        style={{
            padding: '30px',
        }}
    >



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
                <ul id={'list'} style={{listStyle:"none"}}>
                    <li>Chapter 1:Les goose de alumnae</li>
                    <li>Chapter 2:Les goose de alumnae</li>
                    <li>Chapter 3:Les goose de alumnae</li>
                    <li>Chapter 4:Les goose de alumnae</li>
                    <li>Chapter 5:Les goose de alumnae</li>
                    <li>Chapter 6:Les goose de alumnae</li>
                    <li>Chapter 7:Les goose de alumnae</li>

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
    </div>)
}

export default Course;
