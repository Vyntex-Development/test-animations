import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Counter = ({ end, duration }) => {
  const [ref, inView] = useInView({ threshold: 0 });
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (inView && !start) {
      setStart(true);
    }
  }, [inView, start]);

  return (
    <div ref={ref}>
      {start && <CountUp start={0} end={end} duration={duration} />}
    </div>
  );
};

export default Counter;
