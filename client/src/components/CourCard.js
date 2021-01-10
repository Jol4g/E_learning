import React from "react";
import {Link} from "react-router-dom";
import {Button} from "antd";

export default function CourCard(props) {
    const handleClick = () => {
        console.log(props.data);
        let x = JSON.stringify(props.data);
        localStorage.setItem("courseID", x);
    };
    return (
        <div
            style={{
                boxShadow:'0px 1px 5px 1px #bcbcbc',
                backgroundColor: '#fffaff',
                padding: '20px',
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                width: '400px',
                height: '200px',
                justifyContent: 'space-between',
                borderRadius:20,

            }}
        >
            <div
                id={'title'}
                style={{
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#ac02a5'
                }}>
                {props.data.category}
            </div>
            <div>
                {props.data.description}
            </div>
            <div>
                <Button
                    onClick={handleClick}
                >
                    <Link
                        to={'/inscription'}
                        style={{
                            fontFamily:'sans-serif'
                        }}
                    >
                        Join course
                    </Link>
                </Button>
            </div>
        </div>
    );
}
// < title={props.data.category} bordered={true} style={{ width: 300 }}>
// <p>{props.data.description}</p>
//
// <Button onClick={handleClick}>
// <Link to='/inscription'>
// inscrire au cours
// </Link>
// </Button>
// </>
