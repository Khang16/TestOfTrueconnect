"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShoppingCart, Guitar } from "lucide-react";
import { images } from "../../common/image";

export default function MusicLandingPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(
      [
        titleRef.current,
        mainHeadingRef.current,
        subHeadingRef.current,
        buttonRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

   

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        mainHeadingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        subHeadingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-400 h-full">
      {/* Background Image */}
      
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${images.firstPage})`,
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center mt-[12rem] ml-[7rem] max-w-[45rem]">
          {/* Title */}
          <h1
            ref={titleRef}
            className="text-7xl  font-bold mb-8 text-black"
            style={{ fontFamily: "Harley Style" }}
          >
            Music WordPress Theme
          </h1>

          {/* Main Heading */}
          <h2
            ref={mainHeadingRef}
            className="text-2xl md:text-5xl lg:text-[3.8rem]  text-black leading-tight mb-8 uppercase tracking-wide light "
            style={{ fontFamily: "Staatliches" }}
          >
            Dedicated to bands, labels, festivals, music store and more...
          </h2>

          {/* Subheading */}
          <p
            ref={subHeadingRef}
            className="text-xl md:text-[1.9rem] font-bold text-black mb-12 uppercase tracking-wide"
            style={{ fontFamily: "Staatliches" }}
          >
            No coding required
          </p>

          {/* View Demos Button */}
          <button
            ref={buttonRef}
            className="self-start mb-[10rem] px-8 py-4 border-2 border-black text-black font-bold text-lg uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
          >
            View Demos
          </button>
        </div>

        
      </div>
    </div>
  );
}
