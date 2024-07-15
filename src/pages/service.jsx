/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import wedding from "../assets/wedding.jpg";
import baby from "../assets/baby.jpg";
import fun from "../assets/fun.jpg";
import portrait from "../assets/portrait.jpg";
import { Slide } from "react-awesome-reveal";
import test from "../assets/test.jpg";
import title6 from "../assets/title6.jpg";

export const Service = () => {
  return (
    <div className="bg-[#141414] pt-20 w-screen">
      <div className="flex items-center justify-center">
        <Slide>
          {" "}
          <span className="font-semibold uppercase text-neutral-500 text-3xl">
            My Service
          </span>
        </Slide>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#141414]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
          {card.title}
        </p>
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 font-black uppercase text-white backdrop-blur-sm">
          {card.text}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: `${wedding}`,
    title: "Title 1 ",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laborum possimus cupiditate beatae ducimus eligendi qui quisquam minus nisi provident alias iste, recusandae sint nihil soluta.",
    id: 1,
  },
  {
    url: `${baby}`,
    title: "Title 2",
    id: 2,
  },
  {
    url: `${fun}`,
    title: "Title 3",
    id: 3,
  },
  {
    url: `${portrait}`,
    title: "Title 4",
    id: 4,
  },
  {
    url: `${test}`,
    title: "Title 5",
    id: 5,
  },
  {
    url: `${title6}`,
    title: "Title 6",
    id: 6,
  },
];
