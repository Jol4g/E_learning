import React from "react";
import {Link} from "react-router-dom";

export default function CourCard(props) {
    const handleClick = () => {
        console.log(props.data);
        let x = JSON.stringify(props.data);
        localStorage.setItem("courseID", x);
    };
    return (
        <div
            style={{
                backgroundColor: '#eee',
                padding: '20px',
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                width: '400px',
                height: '200px',
                justifyContent: 'space-between',

            }}
        >
            <div
                id={'title'}
                style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#a3a3a3'
                }}>
                {props.data.category}
            </div>
            <div>
                {props.data.description}
            </div>
            <div>
                <button
                    onClick={handleClick}
                >
                    <Link
                        to={'/inscription'}
                        style={{color:'black'}}
                    >
                        Join course
                    </Link>
                </button>
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
