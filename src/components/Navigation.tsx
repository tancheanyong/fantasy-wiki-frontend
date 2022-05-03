import { Router, Routes, Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
      <li>
        <Link to="/worldbuilding">Worldbuilding</Link>
      </li>
    </ul>
  );
}

export default Navigation;
