import React from 'react'
import Button from '../utility/Button';
const Colors = ({flag}) => {
    const colrs = [
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
       },
       {
        name:'fourth',
        color:'blue'
      }
   
    
     ]

     console.log(flag)
    return (
        <div>
           {flag ? colrs.map(color => <Button  key= {color.color} color = {color.color}>{color.name} </Button>) :"no componenet to show"}

        </div>
    )
}

export default Colors
