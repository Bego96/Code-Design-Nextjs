import { CSSProperties } from 'react';
import BarLoader from 'react-spinners/BarLoader';

export default function Loading() {
  const override: CSSProperties = {
    position: "absolute",
    top: "200px", // Specify unit 'px'
    left: "50%", // Center horizontally
    borderColor: "red",
    transform: "translate(-50%, -50%)", // Center both horizontally and vertically
  };

  return (
    <div className='relative h-screen'>
      <BarLoader cssOverride={override} />
    </div>
  );
}