import React, {Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav className="navbar" alt="navigation bar">
      <Link className="link" to={"/"}>Home</Link>
      <Link className="link" to={"/works"}>Works</Link>
      <Link className="link" to={"/about"}>About</Link>
      <button onClick={props.switchTheme}>change theme</button>
    </nav>
  )
}

export default Navbar