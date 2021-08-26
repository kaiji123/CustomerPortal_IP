
import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined" ;
  const isBig = window.innerWidth >1500
  const [windowSize, setWindowSize] = React.useState({
    width:   window.innerWidth,
    height:  window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth== window.innerWidth ? window.innerWidth-1: window.innerWidth-1, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

   
    return () => window.removeEventListener('resize', changeWindowSize);
}, []);

  return windowSize;
}