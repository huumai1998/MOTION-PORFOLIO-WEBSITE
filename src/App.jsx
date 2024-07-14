import { useLayoutEffect, useRef } from "react";
import camera from "./assets/Camera-Lens-PNG-Free-Download.png";
import { About } from "./pages/about";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const container = useRef(null);
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
        .fromTo(
          container.current,
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
              className="image "
            />
            <div className="absolute flex text-white flex-col items-center justify-center">
              <h1 ref={text1} className="text-[170px]">
                <p>Duy Truong</p>
              </h1>
              <p
                ref={text2}
                className="opacity-50 w-48 text-[13px] text-center"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div ref={container} className="container h-screen last">
            <About />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;