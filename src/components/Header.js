import React from "react";
import Button from "../utility/Button";
import "./Header.css"
const Header = ({title}) => {
    const btn_text = 'add';
    const onclick = () =>
    {
        console.log("click")
    }
  return <div>
      <header className='header'>
          <h1>{title}</h1>
          <Button onClick ={onclick} color={'green'} >{btn_text}</Button>
      </header>
  </div>;
};

export default Header;
