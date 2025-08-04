import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Section = ({ sectionId, onSectionEnter }) => {
  const [ref, inView] = useInView({
    threshold: 0, // You can adjust this threshold value
  });

  useEffect(() => {
    if (inView) {
      onSectionEnter();
    }
  }, [inView, onSectionEnter]);

  return <div ref={ref} id={sectionId}></div>;
};

export default Section;
