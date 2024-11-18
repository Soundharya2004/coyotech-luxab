import { useState } from 'react';
import LatestPosts from '../components/LatestPosts';
import FAQ from '../components/FAQ';

export default function Gallery() {
  const images = [
    "https://luxab.ae/wp-content/uploads/2024/11/image.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-5.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-6.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-9.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-14.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-15.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-18.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-23.png",
    "https://luxab.ae/wp-content/uploads/2024/11/image-27.png"
  ];

  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First section - Tall image spanning two rows */}
        <div className="lg:col-span-2 lg:row-span-2 relative">
          <img
            src={images[0]}
            alt="Luxab Service"
            className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
              loadedImages.has(0) ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => handleImageLoad(0)}
          />
        </div>

        {/* Second section - Two square images */}
        {images.slice(1, 3).map((src, index) => (
          <div key={index} className="relative aspect-square">
            <img
              src={src}
              alt={`Luxab Service ${index + 2}`}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                loadedImages.has(index + 1) ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => handleImageLoad(index + 1)}
            />
          </div>
        ))}

        {/* Third section - 2x2 grid */}
        {images.slice(3).map((src, index) => (
          <div key={index} className="relative aspect-square">
            <img
              src={src}
              alt={`Luxab Service ${index + 4}`}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                loadedImages.has(index + 3) ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => handleImageLoad(index + 3)}
            />
          </div>
        ))}
      </div>

      <LatestPosts />
      <FAQ />
    </div>
  );
}
