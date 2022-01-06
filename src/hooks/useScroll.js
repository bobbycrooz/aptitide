import { useState, useEffect } from "react";


export const useScroll = callback => {
  const [scrollDirection, setScrollDirection] = useState(true);

  const handleScroll = () => {
  const direction = (() => {
      return scrollDirection < window.scrollY ? "down" : "up";
    })();
    
    callback(direction);
    setScrollDirection(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
};

