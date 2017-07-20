import React from 'react'
//import Link from 'react-router'


const NavBar = (props) => {
  return(
    <div>
      <h1>NavBar</h1>
      {props.children}
    </div>
 )
}

export default NavBar;
