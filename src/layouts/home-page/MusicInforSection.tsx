import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { images } from "../../common/image";

gsap.registerPlugin(ScrollTrigger);

const MusicInforSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".grid-item", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (window.innerWidth >= 768) {
        const items = document.querySelectorAll(".grid-item");
        items.forEach((item) => {
          const itemElement = item as HTMLElement;

          itemElement.addEventListener("mouseenter", () => {
            gsap.to(itemElement.querySelector(".grid-image"), {
              scale: 1.1,
              duration: 0.5,
              ease: "power2.out",
            });

            gsap.to(itemElement.querySelector(".title-box"), {
              x: 10,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          itemElement.addEventListener("mouseleave", () => {
            gsap.to(itemElement.querySelector(".grid-image"), {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });

            gsap.to(itemElement.querySelector(".title-box"), {
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  const infoData = [
    {
      title: "LINE-UP",
      subtitle: "Nullam tincidunt adipiscing enim",
      bgImage: images.inforMusic1,
    },
    {
      title: "RUNNING ORDER",
      subtitle: "Nullam tincidunt adipiscing enim",
      bgImage: images.inforMusic2,
    },
    {
      title: "ENDORSEMENTS",
      subtitle: "Nullam tincidunt adipiscing enim",
      bgImage: images.inforMusic3,
    },
  ];

  return (
    <section className="pb-20 bg-gray-50">
      <div className="w-full px-20 mx-auto">
        <div
          ref={gridRef}
          className="flex-col justify-center items-center grid md:grid-cols-3 sm:gap-[4rem]"
        >
          {infoData.map((item, index) => (
            <div
              key={index}
              className="grid-item relative group cursor-pointer"
            >
              <div className="relative h-[90rem] w-[90rem] md:h-[28rem] md:w-[28rem] md:overflow-hidden mb-[30rem] md:mb-0">
                <div
                  className="grid-image w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                <div className=" title-box absolute right-0 -bottom-[20rem] md:bottom-0 bg-white/95 backdrop-blur-sm md:p-6 shadow-xl w-[80rem] h-[30rem] md:h-auto md:max-w-[20rem] p-[7rem]">
                  <h3 className="text-[5rem] md:text-xl font-bold text-gray-900 mb-2 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[4rem] md:text-sm leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicInforSection;
