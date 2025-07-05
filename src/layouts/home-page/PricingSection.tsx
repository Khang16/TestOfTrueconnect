import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { images } from "../../common/image";

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for cards
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      // Hover animations
      const cards = document.querySelectorAll(".pricing-card");
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;

        cardElement.addEventListener("mouseenter", () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pricingPlans = [
    {
      price: "$45",
      title: "PASS DAY I",
      description: "Lorem ipsum • consectetur adip • incididunt",
      bgImage: images.one,
    },
    {
      price: "$65",
      title: "PASS DAY II",
      description: "Lorem ipsum • consectetur adip • incididunt",
      bgImage: images.two,
    },
    {
      price: "$75",
      title: "PASS 2 DAYS",
      description: "Lorem ipsum • consectetur adip • incididunt",
      bgImage: images.three,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[3rem] gap-y-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card relative h-[430px] md:h-[30rem] w-[90rem] md:w-[28rem] overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${plan.bgImage})` }}
              />

              {/* Gradient Overlay */}
              <div />

              {/* Content */}
              <div className=" relative z-10 h-full flex flex-col justify-center md:justify-around p-8 text-white">
                {/* Price */}
                <div className="pb-[10rem] md:pb-0 text-center">
                  <h2 className="text-[15rem] md:text-[5rem] font-bold italic "
                  style={{ fontFamily: "Harley Style" }}
                  >
                    {plan.price}
                  </h2>
                </div>

                {/* Description */}
                <div className="pb-[10rem] md:pb-0 text-center mb-8">
                  <p className="text-[5rem] md:text-[1.2rem] md:text-base opacity-90 leading-relaxed w-1/2 md:w-3/4 m-auto">
                    {plan.description}
                  </p>
                </div>

                {/* Button */}
                <div className=" text-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-15 md:py-4 md:px-8 transition-all duration-300 transform group-hover:scale-105 w-1/6 md:w-auto">
                    {plan.title}
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
