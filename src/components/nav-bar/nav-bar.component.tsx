import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div style={{ padding: '10px' }}>
      <Link to='/'> Home </Link>
      <Link to='/about'>About </Link>
      <Link to='/discoverproblems'> Discover Problems</Link>
      <Link to='/discoversolutions'>Discover Soluions </Link>
    </div>
  );
};
