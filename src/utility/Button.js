import React from 'react'

const Button = ({color,onClick,children}) => {
   

 
    return (
        <div>
           <button  onClick={onClick} className='btn' style={{backgroundColor:color}}> {children} </button> 
        </div>
    )
}

export default Button
