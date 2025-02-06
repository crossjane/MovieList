import React from 'react';
import {Link} from 'react-router-dom';



function Header(){
    return(
<>


  <ul className="category">
      <li style={{fontFamily:"Meow Script, serif",margin:"15px 30px 0 30px",fontSize:"30px"}}>
         Movie Night !
      </li>
      <li className="nav-link" style={{marginTop:"20px"}}>
        <Link to="/main">영화</Link>
      </li>
      <li className="nav-link" style={{marginTop:"20px"}}>
        <Link to="/drama">드라마</Link>
      </li>
  </ul>

 
</>
    );

}

export default Header;