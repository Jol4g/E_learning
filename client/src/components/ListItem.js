import React from 'react';
import {Button} from "antd";

const ListItem = (props) => {

    return(
        <li
        style={{display:'flex',flexDirection:'row ',justifyContent:'space-between'}}
        >
            <a download={props.file}>{props.file}</a>
            {props.teacher ? <
                Button
                onClick={()=> {
                    props.Deleted(props.file)
                }}
            >
                X
            </Button>
                : null }
        </li>
    )
}

export default ListItem;
