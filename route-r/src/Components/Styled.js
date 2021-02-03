import React from 'react'

const Styled = (props) => {
    const Scss={
        color: props.color1,
        background: props.color2
    }

    return (
        
        <div>
                <p>{ isNaN(props.var)?<h1 style={Scss}>the word is: {props.var}</h1>:<h1>this is not a word</h1>}</p>
        </div>
    )
}

export default Styled
