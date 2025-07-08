import { motion } from "framer-motion";
import React from "react";

interface MasonryGalleryProps {
  images: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  return (
    <div className="relative w-full overflow-hidden pt-20 h-full md:h-[55rem]">
      <div className="grid grid-cols-6 w-full h-full overflow-hidden">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden shadow-lg ${
              index % 6 === 0
                ? "col-span-3 row-span-3"
                : index % 4 === 0
                ? "col-span-2 row-span-1"
                : "col-span-1 row-span-1"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
