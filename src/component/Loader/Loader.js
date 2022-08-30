import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <Oval
        arialLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="orange"
        secondaryColor="lightblue"
        textAlign="center"
      />
    </div>
  );
}
