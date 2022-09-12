import styled from 'styled-components';

export const NewsItem = styled.li`
  position: relative;
  bottom: 0px;
  transition: 0.5s;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 5px 5px 3px #888888;
  list-style: none;
  background-color: white;
  :hover {
    bottom: 10px;
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(196, 196, 186, 0.2);
    transform: scaleY(0);
    transition: 0.5s;
    transform-origin: top;
  }
  :hover::before {
    transform: scaleY(1);
  }
`;

export const NewsWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(196, 196, 186, 0.6);
`;

export const NewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const NewsTitle = styled.h2`
  margin: 0;
  padding: 10px;
  /* height: 25%; */
  font-size: 18px;
  font-family: 'georgia';
  font-weight: bold;
  text-align: center;
`;

export const NewsDiscr = styled.p`
  margin: 0;
  padding: 5px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
`;
