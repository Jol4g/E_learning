import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function CourCard(props) {
  const handleClick = () => {
    console.log(props.data);
    let x = JSON.stringify(props.data);
    localStorage.setItem("courseID", x);
  };
  return (
    <div>
      <Card title={props.data.category} bordered={true} style={{ width: 300 }}>
        <p>{props.data.description}</p>

        <Button onClick={handleClick}>
        <Link to='/inscription'>
            inscrire au cours 
        </Link>
        </Button>
      </Card>
    </div>
  );
}
