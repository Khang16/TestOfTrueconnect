"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { videos } from "../../common/video";
import CountdownTimer from "../../components/CountdownTimer";
import dayjs from "dayjs";

export default function FirstSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          if (contentRef.current) {
            contentRef.current.style.transform = ""; 
          }
        }
      });
    }

    if (videoRef.current) {
      videoRef.current.muted = true; 
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline 
      >
        <source src={videos.peopleWatching} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>

      <div className="absolute inset-0 bg-black/30"></div>

      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center  h-full text-white p-4"
      >
        <h1
          className="text-[15rem] font-bold mb-4 text-white"
          style={{ fontFamily: "Harley Style" }}
        >
          Herion Fest
        </h1>
        <CountdownTimer targetDate={dayjs().add(20, 'day').toISOString()} /> {/* Ví dụ: Đếm ngược 20 ngày từ bây giờ */}

        <button className="my-[6rem] px-[4rem] py-[3rem] md:px-6 md:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-[3rem] md:text-lg font-semibold transition-colors">
          Khám phá ngay
        </button>
      </div>
    </div>
  );
}
