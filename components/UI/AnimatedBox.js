import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedBox = ({ children, animateType }) => {
  let variants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  if (animateType === "from-left") {
    variants = {
      visible: { ...variants.visible, transform: "translateX(0px)" },
      hidden: { ...variants.hidden, transform: "translateX(-500px)" },
    };
  }
  if (animateType === "from-right") {
    variants = {
      visible: { ...variants.visible, transform: "translateX(0px)" },
      hidden: { ...variants.hidden, transform: "translateX(500px)" },
    };
  }

  if (animateType === "fade") {
    variants = {
      ...variants,
    };
  }

  return (
    <motion.div
      ref={ref}
      className="box"
      variants={variants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
