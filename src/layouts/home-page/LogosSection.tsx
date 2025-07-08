import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { images } from "../../common/image";

gsap.registerPlugin(ScrollToPlugin);

const LogosSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(isDragging);
  isDraggingRef.current = isDragging;

  const startXRef = useRef(startX);
  startXRef.current = startX;

  const initialScrollLeftRef = useRef(initialScrollLeft);
  initialScrollLeftRef.current = initialScrollLeft;

  const logoImages = [
    { id: 1, image: images.clientDark1 },
    { id: 2, image: images.clientDark2 },
    { id: 3, image: images.clientDark3 },
    { id: 4, image: images.clientDark4 },
    { id: 5, image: images.clientDark5 },
    { id: 6, image: images.clientDark6 },
    { id: 7, image: images.clientDark7 },
    { id: 8, image: images.clientDark8 },
    { id: 9, image: images.clientDark9 },
  ];

  const total = logoImages.length;
  const clones = [...logoImages, ...logoImages, ...logoImages];
  const startIndex = total;

  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / clones.length;
      carouselRef.current.scrollLeft = itemWidth * startIndex;
    }
  }, [clones.length, startIndex]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.scrollWidth / clones.length;
    const maxScroll = itemWidth * (total * 2);
    const minScroll = itemWidth * (total - 1);

    if (carouselRef.current.scrollLeft <= minScroll) {
      carouselRef.current.scrollLeft += itemWidth * total;
    } else if (carouselRef.current.scrollLeft >= maxScroll) {
      carouselRef.current.scrollLeft -= itemWidth * total;
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startXRef.current) * 2;
    carouselRef.current.scrollLeft = initialScrollLeftRef.current - walk;
    setDragged(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
      carouselRef.current.style.removeProperty("user-select");
    }
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    setTimeout(() => setDragged(false), 50);
  }, [handleMouseMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setInitialScrollLeft(carouselRef.current?.scrollLeft || 0);
    setDragged(false);

    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grabbing";
      carouselRef.current.style.userSelect = "none";
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleImgClick = (e: React.MouseEvent) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab px-6"
        onMouseDown={handleMouseDown}
        onScroll={handleScroll}
        style={{ scrollBehavior: "auto" }}
      >
        {clones.map((logo, idx) => (
          <img
            key={idx}
            src={logo.image}
            alt={`Logo ${logo.id}`}
            className="flex-shrink-0 w-30 h-full mr-8 object-cover"
            onClick={handleImgClick}
            draggable={false}
            style={{ userSelect: "none" }}
          />
        ))}
      </div>
    </section>
  );
};

export default LogosSection;
