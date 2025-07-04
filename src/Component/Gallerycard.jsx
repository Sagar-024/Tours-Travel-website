import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function GalleryCard({ title, image, category, index }) {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
  scrollTrigger: {
    trigger: cardRef.current,
    start: 'top 85%',
    toggleActions: 'play none none none',
  },
  y: 100,
  opacity: 0,
  duration: 2,
  ease: 'power3.out',
  delay: index * 0.12,
  
});

  }, [index]);

  return (
    <div
      ref={cardRef}
      className="gallery-card relative overflow-hidden rounded-xl shadow-lg group transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover group-hover:opacity-70 transition-opacity duration-300"
      />

      <div className="absolute top-3 left-3 bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full">
        {category}
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-4 py-3 text-lg font-semibold">
        {title}
      </div>
    </div>
  );
}

export default GalleryCard;
