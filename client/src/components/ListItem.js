import React from 'react';
import {Button} from "antd";
import axios from "axios";

const ListItem = (props) => {

    return(
        <li
        style={{display:'flex',flexDirection:'row ',justifyContent:'space-between'}}
        >
            <a target={'_blank'} href={'/download/'+props.file} >{props.file}</a>
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
