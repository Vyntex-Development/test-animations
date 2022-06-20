import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const CustomLightbox = ({ src, btnType }) => {
  const [toggler, setToggler] = useState(false);
  let className;

  if (btnType === "play") {
    className = "play-button";
  }

  if (btnType === "watch-class") {
    className = "watch-class";
  }

  return (
    <>
      <button className={className} onClick={() => setToggler(!toggler)}>
        Drugi button
      </button>
      <FsLightbox toggler={toggler} sources={[src]} />
    </>
  );
};

export default CustomLightbox;
