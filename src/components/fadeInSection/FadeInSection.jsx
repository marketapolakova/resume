import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ ida, children, section }) => {
  // const [ref, inView] = useInView({
  //     threshold: 0.01, // Definuje, jaká část elementu je viditelná
  //     trackVisibility: true,
  //     delay: 100,
  //     root: null,
  // });

  return (
    <div>{children}</div>
    // <section ref={ref} id={ida} className={` ${inView && "fade-in-delay"}`}>
    //   {children}
    // </section>
  );
};

export default FadeInSection;
