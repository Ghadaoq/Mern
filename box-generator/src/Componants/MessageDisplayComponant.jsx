import React from 'react'

const MessageDisplayComponant = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <div>{ props.message.map((item,index)=>{
                let style ={background:item, height:"250px", width:"250px",display: "inline-block"};
                return <div key={ index } style={style}></div>
                }) }</div>
        </>
    );
};

export default MessageDisplayComponant;
