import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/">News all</NavLink>
        <NavLink to="/apple">News apple</NavLink>
        {/* <NavLink to="/tesla">News tesla</NavLink>
        <NavLink to="/business">News business</NavLink>
        <NavLink to="/techCrush">News tech</NavLink>
        <NavLink to="/wsj">News WSJ</NavLink> */}
      </nav>
    </>
  );
}
