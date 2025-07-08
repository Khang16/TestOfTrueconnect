import { gsap } from "gsap";
import { Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import { images } from "../../common/image";

const SocialGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      gsap.fromTo(
        ".gallery-photo",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      // Individual hover effects
      const photos = document.querySelectorAll(".gallery-photo");
      photos.forEach((photo) => {
        const photoElement = photo as HTMLElement;
        const overlay = photoElement.querySelector(".photo-overlay");
        const icon = photoElement.querySelector(".ig-icon");
        const img = photoElement.querySelector(".photo-img");

        photoElement.addEventListener("mouseenter", () => {
          gsap.to(overlay, {
            opacity: 1,
            backdropFilter: "blur(4px)",
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(icon, {
            opacity: 1,
            scale: 1.2,
            rotation: 5,
            duration: 0.25,
            ease: "back.out(2)",
          });

          gsap.to(img, {
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out",
          });
        });

        photoElement.addEventListener("mouseleave", () => {
          gsap.to(overlay, {
            opacity: 0,
            backdropFilter: "blur(0px)",
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(icon, {
            opacity: 0,
            scale: 1,
            rotation: 0,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(img, {
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        });
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  const photos = [
    { id: 1, src: images.galleryImage1, alt: "Instagram photo 1" },
    { id: 2, src: images.galleryImage2, alt: "Instagram photo 2" },
    { id: 3, src: images.galleryImage3, alt: "Instagram photo 3" },
    { id: 4, src: images.galleryImage4, alt: "Instagram photo 4" },
    { id: 5, src: images.galleryImage5, alt: "Instagram photo 5" },
    { id: 6, src: images.galleryImage6, alt: "Instagram photo 6" },
    { id: 7, src: images.galleryImage7, alt: "Instagram photo 7" },
    { id: 8, src: images.galleryImage8, alt: "Instagram photo 8" },
    { id: 9, src: images.galleryImage9, alt: "Instagram photo 9" },
    { id: 10, src: images.galleryImage10, alt: "Instagram photo 10" },
    { id: 11, src: images.galleryImage11, alt: "Instagram photo 11" },
    { id: 12, src: images.galleryImage12, alt: "Instagram photo 12" },
  ];

  return (
    <section ref={galleryRef} className=" bg-gray-50">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-photo relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="photo-img w-full h-full object-cover"
              />

              <div className="photo-overlay absolute inset-0 bg-black/50 opacity-0 flex items-center justify-center">
                <Instagram size={32} className="ig-icon text-white opacity-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;
