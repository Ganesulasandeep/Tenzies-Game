import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfetFull = () => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <>
      <Confetti width={windowDimension.width} height={windowDimension.height} />
    </>
  );
};
export default ConfetFull;
