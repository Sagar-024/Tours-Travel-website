import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import GalleryCard from './Gallerycard.jsx';
import galleryData from '../Data/galleryImages.js';

export default function Gallery() {
  const heroRef = useRef(null);
  const subRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter(item => item.category === selectedCategory);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3, ease: 'power3.out' }
        );
      }

      if (subRef.current) {
        gsap.fromTo(
          subRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: 'power3.out' }
        );
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach(t => t.kill());

    const cards = gsap.utils.toArray('.gallery-card');

    cards.forEach(card => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, [filteredData]);

  const categories = ['All', 'Domestic', 'International', 'Group Tours'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Scenic Tour Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 max-w-3xl">
          <h1
            ref={heroRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Discover <span className="text-lime-400">Journeys</span>
            <span className="block">That Deserve a Frame</span>
          </h1>
          <p
            ref={subRef}
            className="mt-6 text-lg sm:text-2xl italic text-white/60 font-medium"
            style={{ fontFamily: 'Borel, cursive' }}
          >
            Explore unforgettable travel memories captured across the globe.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 py-10 px-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border text-sm sm:text-base transition-all duration-300 tracking-wide ${
              selectedCategory === category
                ? 'bg-lime-500 text-black font-semibold shadow-md'
                : 'bg-white text-black border-gray-300 hover:bg-lime-100 hover:border-lime-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Cards */}
      <div className="px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full text-lg">
            No images found for selected category.
          </p>
        ) : (
          filteredData.map((item, index) => (
            <div key={index} className="gallery-card">
              <GalleryCard {...item} index={index} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
