import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Definuje, jaká část elementu je viditelná
  });

  return (
    <div ref={ref} className={` ${inView && "fade-in-delay"}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
