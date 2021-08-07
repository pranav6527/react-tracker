import React from "react";
import Button from "../utility/Button";
import "./Header.css"
import { useLocation } from "react-router";
const Header = ({title,onAdd,showAdd}) => {
    const btn_add = 'add';
    const btn_close = 'close'
    const location = useLocation()
  return <div>
      <header className='header'>
          <h1 style={{color:'deepskyblue'}}>{title}</h1>
          {location.pathname === '/' && <Button onClick={onAdd} color={showAdd ? 'red' :'green'} >{showAdd ? btn_close : btn_add}</Button>}
      </header>
  </div>;
};

export default Header;
