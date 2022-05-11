import { Router, Routes, Link } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
  return (
    <div className="header">
      <h1 className="header-title">FANTASY WIKI</h1>
      <ul className="navbar">
        <li>
          <Link to="/" className="navlink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/characters" className="navlink">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/worldbuilding" className="navlink">
            Worldbuilding
          </Link>
        </li>
        <li>
          <Link to="/storyboard" className="navlink">
            Story Board
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
