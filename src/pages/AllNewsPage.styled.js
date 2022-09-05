import styled from 'styled-components';

export const NewsList = styled.ul`
  position: relative;
  --gap: 16px;
  --num-cols: 4;
  --row-hight: 500px;

  margin: 0;
  box-sizing: border-box;
  padding: var(--gap);

  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  grid-auto-rows: var(--row-hight);
  gap: var(--gap);

  @media screen and (max-width: 1024px) {
    --num-cols: 2;
    --row-hight: 400px;
  }

  @media screen and (max-width: 480px) {
    --num-cols: 1;
    --row-hight: 400px;
  }
`;
