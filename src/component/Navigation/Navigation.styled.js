import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 60px;
  text-align: center;
  background: #1abc9c;
`;

export const LinkNav = styled(NavLink)`
  font-weight: bold;
  font-size: 2em;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
`;
