import { useLayoutEffect, useRef } from "react";
import camera from "../assets/camera-lens-clipart-design-illustration-free-png.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { About } from "./about";
import { TypeWriter } from "./typeWriter";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneFlip } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";
import { Service } from "./service";

gsap.registerPlugin(ScrollTrigger);
export const Home = () => {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);
  const icon4 = useRef(null);
  const container = useRef(null);
  const container1 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      });

      gsap.set(container.current, {
        marginTop: -container.current.offsetHeight,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: img_container.current,
            pin: img_container.current,
            scrub: 1,
            start: "0% 0%",
          },
        })
        .to(img.current, { transform: "translateZ(2200px)" })
        .to(text1.current, { y: -800 }, 0.05, "<")
        .to(text2.current, { y: -800 }, 0.08, "<")
        .to(icon1.current, { y: -800 }, 0.09, "<")
        .to(icon2.current, { y: -800 }, 0.1, "<")
        .to(icon3.current, { y: -800 }, 0.11, "<")
        .to(icon4.current, { y: -800 }, 0.12, "<")
        .fromTo(
          container.current,
          { yPercent: 100, scaleY: 2 },
          { yPercent: 0, scaleY: 1 }
        )
        .fromTo(
          container1.current,
          { yPercent: 100, scaleY: 2 },
          { yPercent: 0, scaleY: 1 }
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="relative">
        <div
          ref={bg1}
          className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"
        ></div>
        <section>
          <div
            ref={img_container}
            className="img-container perspective flex items-center justify-center h-screen w-screen"
          >
            <img
              ref={img}
              src={camera}
              height={650}
              width={650}
              className="image"
            />
            <div className="absolute flex text-white flex-col items-center justify-center">
              <h1
                ref={text1}
                className="text-[70px] lg:text-[150px] md:text-[110px]"
              >
                <span className="cus-title">
                  <Slide direction="down">
                    <TypeWriter string={"Name Here"} typeSpeed={60} />
                  </Slide>
                </span>
              </h1>
              <p
                ref={text2}
                className="opacity-80 w-90 text-[15px] text-center"
              >
                <Slide direction="right">
                  {" "}
                  <TypeWriter
                    string={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`}
                    typeSpeed={20}
                  />
                </Slide>
              </p>{" "}
              <div className="inline-flex gap-3">
                <div ref={icon1} className="pt-5 rounded-full cursor-pointer">
                  {" "}
                  <Slide direction="right">
                    <FaFacebookSquare
                      size={30}
                      className=""
                      color="#0165E1"
                      onClick={() => {
                        window.open("https://www.facebook.com/");
                      }}
                    />
                  </Slide>
                </div>
                <div ref={icon2} className="pt-5 rounded-full cursor-pointer">
                  <Slide direction="right">
                    <FiInstagram
                      size={30}
                      className=""
                      color="pink"
                      onClick={() => {
                        window.open("https://www.instagram.com/");
                      }}
                    />
                  </Slide>
                </div>
                <div ref={icon3} className="pt-5 rounded-full cursor-pointer">
                  <Slide direction="left">
                    <FcGoogle
                      size={30}
                      className=""
                      onClick={() => {
                        window.open("mailto:huumai0918@gmail.com");
                      }}
                    />
                  </Slide>
                </div>
                <div ref={icon4} className="pt-5 rounded-full cursor-pointer">
                  <Slide direction="left">
                    <FaPhoneFlip
                      size={30}
                      onClick={() => window.open("tel:4039737318")}
                    />
                  </Slide>
                </div>
              </div>
            </div>
          </div>
          <div ref={container} className="container h-screen" id="about">
            <About />
          </div>
          <div
            ref={container1}
            className="container h-screen last"
            id="service"
          >
            <Service />
          </div>
        </section>
      </div>
    </>
  );
};
