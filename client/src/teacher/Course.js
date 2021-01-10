import React from 'react';
import { Upload, message} from "antd";
import {InboxOutlined} from '@ant-design/icons'
const Course = (props) => {

    const { Dragger } = Upload;

    const Dprops = {
        name: 'file',
        multiple: false,
        action: '/user/',
        onChange(info) {
            const { status } = info.file;
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
                <Dragger
                    {...Dprops}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
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
