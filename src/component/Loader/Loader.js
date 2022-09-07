import { Oval } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export default function Loader() {
  return (
    <Container>
      <Oval
        arialLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="#1abc9c"
        secondaryColor="lightblue"
        textAlign="center"
      />
    </Container>
  );
}
