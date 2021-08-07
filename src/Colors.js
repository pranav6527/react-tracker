import React from 'react'
import Button from './Button';
const Colors = () => {
    const colors = [
        { name:'first',
         color:'red'
       },
       {
         name:'second',
         color:'yello'
       },{
         name:'third',
         color:'grey'
       },
       {
         name:'fourth',
         color:'orange'
       }
   
     ]
    return (
        <div>
           {colors.map(color => <Button  key= {color.name} color = {color.color}>{color.name}</Button>)}  
        </div>
    )
}

export default Colors
