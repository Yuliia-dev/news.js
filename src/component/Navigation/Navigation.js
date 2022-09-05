import { Nav, LinkNav } from './Navigation.styled';

export default function Navigation() {
  return (
    <>
      <Nav>
        <LinkNav to="/">all news from everywhere</LinkNav>
        {/* <NavLink to="/apple">News apple</NavLink> */}
        {/* <NavLink to="/tesla">News tesla</NavLink>
        <NavLink to="/business">News business</NavLink>
        <NavLink to="/techCrush">News tech</NavLink>
        <NavLink to="/wsj">News WSJ</NavLink> */}
      </Nav>
    </>
  );
}
