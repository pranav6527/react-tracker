import React from "react";
import Button from "../utility/Button";
import "./Header.css"
const Header = ({title,onAdd,showAdd}) => {
    const btn_add = 'add';
    const btn_close = 'close'
  
  return <div>
      <header className='header'>
          <h1>{title}</h1>
          <Button onClick={onAdd} color={showAdd ? 'red' :'green'} >{showAdd ? btn_close :btn_add}</Button>
      </header>
  </div>;
};

export default Header;
