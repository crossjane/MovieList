import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
    return(
<>


  <ul className="category">
      <li>
        <Link to="/main">영화</Link>
      </li>
      <li>
        <Link to="/drama">드라마</Link>
      </li>
  </ul>

 
</>
    );

}

export default Header;