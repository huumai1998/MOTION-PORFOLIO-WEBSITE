import { Slide } from "react-awesome-reveal";
import aboutPics from "../assets/pexels-derice-jason-fahnkow-745824-1595241.jpg";

export const About = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-col md:flex-row items-center justify-center text-white h-screen text-center w-[80%] mx-auto p-4 md:p-0 gap-4">
        <div className="md:w-1/2 justify-center mb-4 md:mb-0 hidden md:flex">
          <Slide>
            <img src={aboutPics} alt="About" className="max-w-full h-auto" />
          </Slide>
        </div>
        <div className="w-full md:w-1/2 text-lg flex flex-col items-center">
          <Slide direction="down">
            {" "}
            <p className="p-4 md:p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              laborum possimus cupiditate beatae ducimus eligendi qui quisquam
              minus nisi provident alias iste, recusandae sint nihil soluta.
              Velit consectetur nemo reprehenderit! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Natus laborum possimus cupiditate
              beatae recusandae sint nihil soluta. Velit consectetur nemo
              reprehenderit!
            </p>
          </Slide>
          <div className="mt-10">
            <span className="about-title text-[45px] md:text-[70px]">
              <Slide direction="right">
                <h1>SomeOne</h1>
              </Slide>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
