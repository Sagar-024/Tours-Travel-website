import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video from '../Asset/packages.mp4';

gsap.registerPlugin(ScrollTrigger);

const allPackages = [
  {
    title: 'Himalayan Adventure', location: 'Himachal', days: '7 Days 6 Nights', price: '₹18,500', img: 'https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_1280.jpg'
  },
  {
    title: 'Goa Beach Bliss', location: 'Goa', days: '4 Days 3 Nights', price: '₹12,000', img: 'https://cdn.pixabay.com/photo/2020/02/27/16/05/goa-beaches-4885113_1280.jpg'
  },
  {
    title: 'Royal Rajasthan Ride', location: 'Rajasthan', days: '6 Days 5 Nights', price: '₹16,000', img: 'https://cdn.pixabay.com/photo/2018/04/22/18/19/caravan-3341872_1280.jpg'
  },
  {
    title: 'Backwaters of Kerala', location: 'Kerala', days: '5 Days 4 Nights', price: '₹14,000', img: 'https://cdn.pixabay.com/photo/2017/02/17/21/18/south-india-2075399_1280.jpg'
  },
  {
    title: 'Northeast Escape', location: 'Meghalaya', days: '6 Days 5 Nights', price: '₹15,500', img: 'https://cdn.pixabay.com/photo/2019/09/26/16/35/camping-4506410_1280.jpg'
  },
  {
    title: 'Desert Safari', location: 'Jaisalmer', days: '3 Days 2 Nights', price: '₹10,500', img: 'https://cdn.pixabay.com/photo/2022/08/14/14/21/desert-7386004_1280.jpg'
  },
  {
    title: 'Manali Winter Escape', location: 'Himachal', days: '5 Days 4 Nights', price: '₹13,000', img: 'https://cdn.pixabay.com/photo/2021/10/19/11/53/nature-6723375_1280.jpg'
  },
  {
    title: 'Romantic Udaipur', location: 'Rajasthan', days: '3 Days 2 Nights', price: '₹11,500', img: 'https://cdn.pixabay.com/photo/2015/07/07/05/50/ranakpur-834022_1280.jpg'
  },
  {
    title: 'Spiritual Varanasi Tour', location: 'Varanasi', days: '4 Days 3 Nights', price: '₹10,000', img: 'https://cdn.pixabay.com/photo/2023/08/24/20/36/durga-puja-8211540_1280.jpg'
  },
  {
    title: 'Mumbai City Lights', location: 'Mumbai', days: '2 Days 1 Night', price: '₹8,500', img: 'https://cdn.pixabay.com/photo/2022/08/01/12/36/city-7358078_1280.jpg'
  },
  {
    title: 'Darjeeling Tea Escape', location: 'West Bengal', days: '5 Days 4 Nights', price: '₹13,700', img: 'https://cdn.pixabay.com/photo/2020/07/19/09/57/hill-5419527_1280.jpg'
  }
];

export default function Packages() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [filtered, setFiltered] = useState(allPackages);

  const handleFilter = () => {
    let results = allPackages.filter(pkg => {
      const durationDays = parseInt(pkg.days);
      const cleanPrice = parseInt(pkg.price.replace(/[^0-9]/g, ''));

      const destMatch = destination ? pkg.location === destination : true;
      const durMatch =
        duration === '1-3' ? durationDays <= 3 :
        duration === '4-6' ? durationDays >= 4 && durationDays <= 6 :
        duration === '7+' ? durationDays >= 7 : true;
      const priceMatch =
        priceRange === 'below' ? cleanPrice < 10000 :
        priceRange === 'mid' ? cleanPrice >= 10000 && cleanPrice <= 20000 :
        priceRange === 'above' ? cleanPrice > 20000 : true;

      return destMatch && durMatch && priceMatch;
    });

    setFiltered(results);
  };

  // ✅ Fixed GSAP animation handling
  useEffect(() => {
    const timeout = setTimeout(() => {
      const title = document.querySelector('.hero-title');
      const subtitle = document.querySelector('.hero-sub');
      const cards = gsap.utils.toArray('.package-card');

      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      if (title) {
        gsap.from(title, {
          y: -50,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        });
      }

      if (subtitle) {
        gsap.from(subtitle, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out'
        });
      }

      if (cards.length) {
        cards.forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 60,
            duration: 0.9,
            delay: i * 0.1,
            ease: 'power2.out'
          });
        });
      }
    }, 50); // Delay helps with Outlet mount timing

    return () => clearTimeout(timeout);
  }, [filtered]);

  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <div className="relative w-full h-screen text-center">
        <video className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block" src={video} autoPlay muted loop />
        <img className="absolute top-0 left-0 w-full h-full object-cover block sm:hidden" src="https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_1280.jpg" alt="Venice" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        <div className="hero-title absolute top-20 sm:top-1/2 left-5 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-20 text-left sm:text-center px-4 max-w-[90%] sm:max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-lime-400">Packages</span>
          </h1>
          <p className="hero-sub mt-4 text-lg sm:text-2xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Om Travels is your gateway to unforgettable experiences —<span className="block">crafted for explorers, dreamers & adventurers.</span>
          </p>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-16 px-4 bg-white">
        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <select onChange={(e) => setDestination(e.target.value)} className="px-5 py-3 border rounded shadow text-gray-700 w-full sm:w-auto">
              <option value="">Destination</option>
              {[...new Set(allPackages.map(p => p.location))].map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
            </select>
            <select onChange={(e) => setDuration(e.target.value)} className="px-5 py-3 border rounded shadow text-gray-700 w-full sm:w-auto">
              <option value="">Duration</option>
              <option value="1-3">1–3 Days</option>
              <option value="4-6">4–6 Days</option>
              <option value="7+">7+ Days</option>
            </select>
            <select onChange={(e) => setPriceRange(e.target.value)} className="px-5 py-3 border rounded shadow text-gray-700 w-full sm:w-auto">
              <option value="">Price</option>
              <option value="below">Below ₹10,000</option>
              <option value="mid">₹10k–₹20k</option>
              <option value="above">Above ₹20k</option>
            </select>
            <button onClick={handleFilter} className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded shadow-md transition-all w-full sm:w-auto">
              Find Trip
            </button>
          </div>
        </div>

        {/* Tour Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-600 col-span-full text-lg">No packages found for selected filters.</p>
          ) : (
            filtered.map((pkg, i) => (
              <div key={i} className="package-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
                <img src={pkg.img} alt={pkg.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-lime-500 mb-1" style={{ fontFamily: 'Lobster, cursive' }}>{pkg.title}</h3>
                  <p className="text-gray-600 mb-2">{pkg.location} • {pkg.days}</p>
                  <p className="font-semibold text-gray-800">
                    From <span className="text-green-600">{pkg.price}</span>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
                    <button className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition">View Details</button>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition">Book Now</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
