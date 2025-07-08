import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const SubscribeBannerSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".subscribe-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".subscribe-form",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative h-[30rem] w-full overflow-hidden"
      style={{ backgroundColor: "#141414" }}
    >
      <div
        className="absolute text-[30rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ fontFamily: "Harley Style", color: "#1D1D1D" }}
      >
        Subscrible
      </div>
      <form
        className="
          absolute 
          left-0 
          top-1/2 
          -translate-y-1/2 
          z-20 
          px-4 
          w-full 
          flex flex-col gap-2
          md:w-auto md:px-20 md:right-0 md:left-auto md:flex-row md:items-center md:justify-end
        "
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          required
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-transparent border border-white-500 text-white placeholder-white-500 focus:outline-none focus:border-white-300 transition-all duration-300 text-base disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="w-full md:w-auto px-8 py-4 bg-transparent border border-white-500 text-white font-bold tracking-widest hover:bg-white-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base"
        >
          {isSubmitting ? "JOINING..." : "JOIN"}
        </button>
      </form>
    </section>
  );
};

export default SubscribeBannerSection;
