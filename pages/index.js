import React from "react";
import Slider from "../components/UI/Slider";
import { useEffect, useState, useRef } from "react";
import AnimatedBox from "../components/UI/AnimatedBox";
import Counter from "../components/UI/Counter";
export default function Home() {
  const [header, setHeader] = useState(false);
  const articleRef = useRef();
  const progressbarRef = useRef();

  useEffect(() => {
    let isScrolling = false;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        isScrolling = true;

        render();

        function render() {
          // requestAnimationFrame(render);

          if (!isScrolling) return;

          if (
            ((window.scrollY - articleRef.current.getBoundingClientRect().top) /
              articleRef.current.offsetHeight) *
              100 <
            15
          ) {
            return;
          }

          progressbarRef.current.value =
            ((window.scrollY - articleRef.current.getBoundingClientRect().top) /
              articleRef.current.offsetHeight) *
            100;

          isScrolling = false;
        }

        if (window.pageYOffset > 200) {
          setHeader(true);
          return;
        }
        setHeader(false);
      });
    }
  }, []);

  return (
    <div className="wrapper-2">
      <header
        className={`${header ? "animate-header" : "header-disable"} header`}
      >
        Ovo je neki header
      </header>
      <h1>Lightbox</h1>
      <Slider />
      <div className="bar-wrapper" ref={articleRef}>
        <progress ref={progressbarRef} min="0" max="100" value="10"></progress>
      </div>
      <div className="wrapper-3">
        <AnimatedBox animateType="fade">
          <h1>Box</h1>
        </AnimatedBox>
        <AnimatedBox animateType="fade">
          <h1>Box1</h1>
        </AnimatedBox>
        <AnimatedBox animateType="from-left">
          <h1>Box</h1>
        </AnimatedBox>
        <AnimatedBox animateType="from-right">
          <h1>Box1</h1>
        </AnimatedBox>
        <AnimatedBox animateType="from-left">
          <h1>Box</h1>
        </AnimatedBox>
        <AnimatedBox animateType="from-right">
          <h1>Box1</h1>
        </AnimatedBox>
        <AnimatedBox animateType="from-left">
          <h1>Box</h1>
        </AnimatedBox>
        <AnimatedBox animateType="fade">
          <h1>Box1</h1>
        </AnimatedBox>
      </div>
      <div className="counter-wrapper">
        <h1>COUNTER</h1>
        <Counter end={33} duration={2} />
        <Counter end={123} duration={3} />
        <Counter end={2222} duration={4} />
        <Counter end={10} duration={1} />
      </div>
    </div>
  );
}
