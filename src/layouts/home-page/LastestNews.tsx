// ... existing code ...
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../../common/image";

const LastestNewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false); 
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    [
      {
        id: 1,
        title: "GALLERY POST",
        date: "JULY 16, 2018",
        author: "FERDINAND DAVIDSON",
        categories: ["GALLERY", "PAGE BUILDER", "PHOTO"],
        excerpt:
          "Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
        image: images.lastesNew1,
        readMore: "READ MORE",
      },
      {
        id: 2,
        title: "FEATURED PLAYLIST",
        date: "FEBRUARY 17, 2018",
        author: "FERDINAND DAVIDSON",
        categories: ["IMAGE", "PHOTO"],
        excerpt:
          "Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
        image: images.lastesNew2,
        readMore: "READ MORE",
      },
      {
        id: 3,
        title: "STANDARD POST",
        date: "FEBRUARY 16, 2018",
        author: "FERDINAND DAVIDSON",
        categories: ["STICKY", "SUPER SATAN"],
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
        image: images.lastesNew3,
        readMore: "READ MORE",
      },
    ],
    [
      {
        id: 4,
        title: "MUSIC REVIEW",
        date: "JANUARY 15, 2018",
        author: "FERDINAND DAVIDSON",
        categories: ["REVIEW", "MUSIC"],
        excerpt:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices...",
        image: images.inforMusic1,
        readMore: "READ MORE",
      },
      {
        id: 5,
        title: "CONCERT RECAP",
        date: "JANUARY 10, 2018",
        author: "FERDINAND DAVIDSON",
        categories: ["CONCERT", "LIVE"],
        excerpt:
          "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a...",
        image: images.inforMusic2,
        readMore: "READ MORE",
      },
      {
        id: 6,
        title: "ARTIST INTERVIEW",
        date: "DECEMBER 28, 2017",
        author: "FERDINAND DAVIDSON",
        categories: ["INTERVIEW", "ARTIST"],
        excerpt:
          "Pellentesque habitant morbi tristique senectus et netus et...",
        image: images.inforMusic3,
        readMore: "READ MORE",
      },
    ],
  ];

  const allPosts = blogPosts.flat(); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalEffectiveSlides = isMobile ? allPosts.length : blogPosts.length;

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -currentSlide * 100 + "%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    if (currentSlide >= totalEffectiveSlides) {
      setCurrentSlide(0);
    }
  }, [totalEffectiveSlides, currentSlide]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 100) {
      if (translateX > 0 && currentSlide < totalEffectiveSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (translateX < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
    setTranslateX(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < totalEffectiveSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section ref={containerRef} className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="blog-header text-center mb-16">
          <h2
            className="text-[25rem] md:text-[6rem] font-script text-[#ABABAB]"
            style={{ fontFamily: "Harley Style" }}
          >
            Latest News
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wider">
            BLOG
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${
                -currentSlide * 100 + translateX * 0.1
              }%)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {isMobile
              ? // Mobile view: mỗi bài đăng là một slide riêng
                allPosts.map((post) => (
                  <div key={post.id} className="w-full flex-shrink-0">
                    <article className="overflow-hidden  group cursor-pointer">
                      {/* Image */}
                      <div className="relative h-[50rem] overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 -mt-10 float-right h-[40rem] w-[calc(100%-10rem)] bg-white p-6 shadow-md">
                        {/* Title */}
                        <h4 className="text-[5rem] font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                          {post.title}
                        </h4>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-2 text-[3rem] text-gray-500 mb-4">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.author}</span>
                          <span>•</span>
                          {post.categories.map((category, index) => (
                            <span key={index} className="uppercase">
                              {category}
                              {index < post.categories.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-[3rem] leading-relaxed mb-4">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <button className="text-[2.5rem] font-bold text-gray-900 hover:text-gray-600 transition-colors tracking-wider">
                          {post.readMore}
                        </button>
                      </div>
                    </article>
                  </div>
                ))
              : // Desktop view: nhóm các bài đăng thành slide
                blogPosts.map((slideGroup, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {slideGroup.map((post) => (
                        <article
                          key={post.id}
                          className="overflow-hidden  group cursor-pointer"
                        >
                          {/* Image */}
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 -mt-10 float-right w-[calc(100%-2rem)] bg-white p-6 shadow-md">
                            {/* Title */}
                            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                              {post.title}
                            </h4>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.author}</span>
                              <span>•</span>
                              {post.categories.map((category, index) => (
                                <span key={index} className="uppercase">
                                  {category}
                                  {index < post.categories.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))}
                            </div>

                            {/* Excerpt */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {post.excerpt}
                            </p>

                            {/* Read More */}
                            <button className="text-xs font-bold text-gray-900 hover:text-gray-600 transition-colors tracking-wider">
                              {post.readMore}
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalEffectiveSlides - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots flex justify-center items-center gap-3 mt-24">
          {Array.from({ length: totalEffectiveSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-gray-900 scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastestNewsSection;
