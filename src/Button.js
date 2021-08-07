import React from 'react'

const Button = ({color,children}) => {
    return (
        <div>
           <button style={{backgroundColor:color}}> {children} </button> 
        </div>
    )
}

export default Button
