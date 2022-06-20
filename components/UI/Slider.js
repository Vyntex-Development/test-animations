import "react-awesome-slider/dist/styles.css";
import Lightbox from "./Lightbox";
import NextImage from "next/image";

const CustomSlider = () => {
  return (
    <div className="wrapper">
      <div>
        <img src="" alt="" />
        <NextImage
          src="https://i.pinimg.com/originals/93/7b/84/937b84749d7103d61bb56b15c415f6db.jpg"
          width={500}
          height={300}
        />
        <Lightbox
          btnType="play"
          src={
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Un3EBOCil-o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          }
        />
      </div>
      <div>
        <h2></h2>
        <p></p>
        <Lightbox
          btnType="watch-class"
          src={
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Un3EBOCil-o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          }
        />
      </div>
    </div>
  );
};

export default CustomSlider;
