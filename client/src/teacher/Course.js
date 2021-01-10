import React, {useEffect, useState} from 'react';
import {Button, message, Upload} from "antd";
import {InboxOutlined} from '@ant-design/icons'
import axios from "axios";
import ListItem from "../components/ListItem";

const Course = (props) => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        axios.get('user/getFiles')
            .then((data)=>{
                console.log(data.data)
                setFiles(data.data.files)
            })

    }, [])

    const Refresh = () => {
        axios.get('user/getFiles')
            .then((data)=>{
                console.log(data.data)
                setFiles(data.data.files)
            })
    }

    const Deleted = (id) => {
       let Filtred = files.filter((file)=>file!==id);
       setFiles(Filtred)
    }
    const Update = () => {
        // updated chapitres name in db collection courses
        axios.get('user/getFiles')
        .then((data)=>{
            console.log(data.data)
            setFiles(data.data.files)
        })
    }
    const {Dragger} = Upload;

    const Dprops = {
        name: 'file',
        multiple: false,
        action: '/user/uploadFile',
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
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
                <div
                    style={{
                        display:'flex',
                        flexDirection:'column',
                    }}
                >
                    <Button
                        onClick={()=>{Refresh()}}
                    >
                        Refresh
                    </Button>
                    <br/>
                    <Button

                        type={'danger'}
                        onClick={()=>{Update()}}
                    >
                        Update
                    </Button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
                    <h1>
                        Course
                    </h1>
                    <ul id={'list'} style={{listStyle: "none"}}>
                        {files.length>0 ? files.map((file)=> {
                            return (<ListItem key={files.indexOf(file)} Deleted={Deleted} file={file} teacher={true}/>)
                        }): null}

                    </ul>
                </div>
                <div
                    style={{
                        padding: 20,
                        marginTop: 0,
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '30%',
                        height: '80%',
                        textAlign: 'center',
                        backgroundColor: 'transparent',
                        borderRadius: 5,
                        boxShadow: '0px 0px 5px 1px #ccc'
                    }}
                >
                    <Dragger
                        {...Dprops}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit pdf pptx file.
                        </p>
                    </Dragger>
                </div>
            </div>
        </div>)
}

export default Course;
