/* eslint-disable react/prop-types */
import { Player } from "@lottiefiles/react-lottie-player";
export const Loading = ({ src, loop, autoplay, controls }) => {
  return (
    <>
      <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
        <Player autoplay={autoplay} loop={loop} controls={controls} src={src} />
      </div>
    </>
  );
};
