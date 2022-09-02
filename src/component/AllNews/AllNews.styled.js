import styled from 'styled-components';

export const NewsItem = styled.li`
  list-style: none;
  bottom: 0px;
  padding: 10px;
  background-color: white;
  /* border: solid black 1px; */
  border-top: solid green 2px;
  transition: 0.5s;
  cursor: pointer;
  overflow: auto;
  :hover {
    bottom: 10px;
  }
`;

export const NewsTitle = styled.h2`
  margin: 0;
  padding: 10px;
  height: 25%;
  font-size: 18px;
  font-family: 'georgia';
  font-weight: bold;
  text-align: center;
`;

export const NewsImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const NewsDiscr = styled.p`
  margin: 0;
  padding: 5px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
`;
