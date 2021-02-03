import React from 'react'

const Input = (props) => {
    return (
        
        <div>
            <p> { isNaN(props.var)?<h1>the word is: {props.var}</h1>:<h1>the number is:{props.var}</h1>}</p>
        </div>
    )
}

export default Input
