// PublicationsCarousel.jsx
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import axios from "axios";

const fetchOgImage = async (url) => {
  try {
    const { data } = await axios.get(
      `https://api.microlink.io?url=${encodeURIComponent(url)}`
    );
    return data?.data?.image?.url || null;
  } catch (err) {
    console.error("Error fetching Microlink OG image:", err);
    return null;
  }
};

const PublicationsCarousel = ({ publications }) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const results = await Promise.all(
        publications.map(async (pub) => {
          const img = await fetchOgImage(pub.url);
          return { ...pub, image: img };
        })
      );
      setImages(results);
    };
    loadImages();
  }, [publications]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((pub, idx) => (
          <div className="flex-[0_0_100%] p-4" key={idx}>
            <a href={pub.url} target="_blank" rel="noopener noreferrer">
              {pub.image ? (
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-2xl">
                  <span>No Image</span>
                </div>
              )}
              <h3 className="mt-2 text-lg font-semibold text-center">{pub.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsCarousel;
