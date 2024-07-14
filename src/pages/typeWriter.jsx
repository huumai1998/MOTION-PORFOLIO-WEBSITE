/* eslint-disable react/prop-types */
import { Typewriter } from "react-simple-typewriter";

export const TypeWriter = ({ string, typeSpeed }) => {
  return <Typewriter words={[string]} typeSpeed={typeSpeed}></Typewriter>;
};
