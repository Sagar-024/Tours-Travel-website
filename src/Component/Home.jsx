import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import video2 from '../Asset/nature.mp4';
import Testimonial from './Testimonial.jsx';
import activities from '../Data/activites.js';
import contactimage from '../Asset/contact.webp';

function Home() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (window.location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Hero animation
  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    }
  }, []);

  // Images scroll animation
  useEffect(() => {
    gsap.utils.toArray(imageRefs.current).forEach((img) => {
      gsap.fromTo(
        img,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gray-950">
      {/* HERO SECTION */}
      <div ref={heroRef} className="relative w-full h-screen text-center">
        <img
          src="https://cdn.pixabay.com/photo/2020/09/30/21/44/pillars-5617147_1280.jpg"
          alt="Royal Palace Mobile Background"
          className="absolute top-0 left-0 w-full h-full object-cover block sm:hidden"
        />

        <video
          className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
          src={video2}
          autoPlay
          muted
          loop
          playsInline
          
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        <div
          ref={heroTextRef}
          className="absolute top-24 sm:top-1/2 left-6 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 text-left sm:text-center"
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '1px 1px 10px rgba(0, 0, 0, 0.7)',
            }}
            className="text-4xl sm:text-7xl font-bold text-white leading-tight max-w-[90%] sm:max-w-3xl"
          >
            Pack <span className="text-lime-400">Memories</span>
            <br />
            <span className="whitespace-nowrap mt-3">Not just bags</span>
          </h1>
        </div>
      </div>

      {/* ACTIVITIES SECTION */}
      <section className="py-16 px-4">
        <div className="text-center mb-12 max-w-[90%] mx-auto">
          <h3
            style={{ fontFamily: 'Borel, cursive' }}
            className="text-3xl sm:text-4xl text-lime-500 font-bold mb-2"
          >
            Explore The World Your Way
          </h3>
          <h2
            style={{ fontFamily: 'Borel, cursive' }}
            className="text-2xl sm:text-3xl font-extrabold text-white mt-4"
          >
            Popular Activities
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {activities.map((act, i) => (
            <div
              key={i}
              ref={el => (imageRefs.current[i] = el)}
              className="bg-white w-full sm:w-[48%] lg:w-[30%] rounded-xl shadow-md overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={act.img}
                alt={act.title}
                className="h-56 sm:h-60 w-full object-cover p-2 rounded-xl"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg sm:text-xl font-semibold">{act.title}</h4>
                <div className="flex items-center justify-center mt-2 text-gray-500">
                  <span>{act.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* WHY CHOOSE US SECTION */}
      <div
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_1280.jpg')"
        }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <section className="bg-cover bg-center py-20 px-4">
          <div className="bg-black bg-opacity-70 max-w-6xl mx-auto rounded-xl p-6 sm:p-10">
            <div className="text-center mb-12">
              <h3
                className="text-3xl sm:text-4xl text-lime-500 mb-4"
                style={{ fontFamily: 'Lobster, cursive' }}
              >
                Why Choose Us
              </h3>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'Lobster, cursive' }}
              >
                We’re Your Perfect Travel Partner
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white text-center">
              {[{ icon: '⚡️', label: 'Instant Booking' }, { icon: '🚐', label: 'Pickup and Drop' }, { icon: '🧭', label: 'Professional Guide' }, { icon: '💰', label: 'Friendly Price' }].map((item, i) => (


                <div
                  key={i}
                  className="bg-white/10 rounded-xl py-6 px-5 hover:bg-white/20 transition w-full md:w-1/4"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-base sm:text-lg font-semibold tracking-wide">
                    {item.label}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonial />

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="w-full bg-cover bg-center bg-no-repeat py-20 px-6"
          style={{
            backgroundImage:
              "url('https://elements-resized.envatousercontent.com/elements-preview-images/6f9a34a2-049f-4852-9cac-acb2da0c34aa?w=1370&cf_fit=scale-down&q=85&format=auto&s=a8261d8eaa48869ca74a3ec360c7fc4b8dad01df130dca50b104de2164db3f0c')"
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

            {/* LEFT SIDE */}
            <div className="text-black px-2 sm:px-4" style={{ fontFamily: "'Lobster', cursive" }}>
              <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">Get in Touch</h2>
              <p className="text-2xl mb-6 leading-relaxed text-black/80">
                Planning a trip? Have questions? We’re here to help you book unforgettable journeys and resolve all your travel concerns.
              </p>

              <ul className="space-y-3 text-1xl font-medium text-black/80"

              >
                <li>📩 Reach out for custom packages</li>
                <li>📍 Ask about destinations or availability</li>
                <li>⏱ Quick response within 24 hours</li>
              </ul>

              {/* Email Block Centered */}
              <div className="mt-10 flex ">
                <div className="bg-white rounded-xl shadow-xl px-6 py-5 text-center">
                  <h4 className="text-gray-800 font-bold text-lg mb-1">Email Us</h4>
                  <a
                    href="mailto:vaishnavidhadge@xpertstim.com"
                    className="text-blue-600 hover:underline text-lg font-semibold"
                  >
                    vaishnavidhadge@xpertstim.com
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Hidden on Small Screens */}
            <div className="hidden md:flex justify-center">
              <img
                src={contactimage}
                alt="Contact"
                className="rounded-2xl w-full max-w-md shadow-2xl"
              />
            </div>
          </div>
        </section>




      </div>

    </div>
  );
}

export default Home;
