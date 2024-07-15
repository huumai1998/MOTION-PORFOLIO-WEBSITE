"use client";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
// import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition rounded-full flex items-center duration-300 text-center ease-out scroll-smooth w-[80%] fixed top-5 left-1/2 transform -translate-x-1/2 z-50 p-1 ${
        scrolling
          ? "custom-bg shadow-lg shadow-black-500/40"
          : "bg-transparent text-white"
      }`}
    >
      <div className="w-full h-14 md:h-14">
        <div className="max-w-screen-2xl h-full mx-auto px-[10em] flex items-center justify-between">
          <div className="hidden lg:inline-flex left-0 gap-20 uppercase text-sm font-semibold">
            <Link to="#" smooth>
              Home
            </Link>
          </div>
          <div className="hidden lg:inline-flex left-0 gap-20 uppercase text-sm font-semibold">
            <Link to="#about" smooth>
              About
            </Link>
          </div>
          <Link
            to="#"
            smooth
            className={`uppercase cus-title font-bold transition duration-350 ease-out scroll-smooth ${
              scrolling ? "text-[1.62rem]" : "text-[1.5rem]"
            }`}
          >
            DT
          </Link>
          <div className="hidden lg:inline-flex left-0 gap-20 uppercase text-sm font-semibold">
            <Link to="#service" smooth>
              Service
            </Link>
          </div>
          <div className="hidden lg:inline-flex left-0 gap-20 uppercase text-sm font-semibold">
            <a href="/">Contact</a>
          </div>
          <div className="lg:hidden px-10">
            {!open ? (
              <>
                <FiMenu
                  className="text-3xl"
                  onClick={() => setOpen(true)}
                  size={20}
                />
              </>
            ) : (
              <>
                <IoCloseSharp
                  className="text-3xl"
                  onClick={() => setOpen(false)}
                  size={20}
                />
              </>
            )}
            {open && (
              <>
                <div className="lg:hidden">
                  <ul className="p-6 absolute left-0 z-10 mt-4 w-full  origin-top-right rounded-md py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <li className="navbarLi">Home</li>
                    <li className="navbarLi">Pages</li>
                    <li className="navbarLi">Services</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
