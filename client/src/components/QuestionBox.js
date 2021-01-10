import React from 'react';
import {Radio} from "antd";

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

const qStyle= {
    fontFamily:'sans-serif',
    paddingBottom:10,
    lineHeight: 2
}
const QuestionBox = () => {
    const [value, setValue] = React.useState(null)
    const onChange=(e)=>{
        setValue(e.target.value)
    }

    return (
        <div
            style={{
                border: 'solid 1px #eee',
                margin: 20,
                padding:20
            }}
        >
            <div style={qStyle} id={'question'}>
                Qeulle est votre age ?
            </div>
            <div id={'answers'}>
                <Radio.Group onChange={onChange} value={value} >
                    <Radio style={radioStyle} value={1}>
9
                    </Radio>
                    <Radio style={radioStyle} value={2}>
18
                    </Radio>
                    <Radio style={radioStyle} value={3}>
21
                    </Radio>
                </Radio.Group>
            </div>
        </div>
    )
}

export default QuestionBox;
