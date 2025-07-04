import { useState  , useEffect , useRef} from "react";
import gsap from "gsap";


const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing experience! Loved the food, the journey, and the vibes. Totally worth it!",
    img: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "It was an unforgettable adventure. Everything was perfectly organized.",
    img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
  },
  {
    name: "Alex Roy",
    feedback: "Smooth booking and beautiful locations. My family had a great time.",
    img: "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg",
  },
  {
    name: "Maya Lee",
    feedback: "Professional team and amazing service. I’ll book again next year!",
    img: "https://cdn.pixabay.com/photo/2016/05/13/12/19/face-1389832_1280.jpg",
  },
];

export default function Testimonial() {
    
 const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const testimonialRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      testimonialRef.current,
      {
        scale: 0.95,
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
      }
    )
      .fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.3"
      );
  }, [index]);


  return (
    <section   ref={testimonialRef}  className="py-16 px-4  "
    
    
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          style={{ fontFamily: 'Borel, cursive' }}
          className="text-4xl font-bold text-white mb-6 italic"
        >
          What Our Customers Say
        </h2>

        <div className="bg-white shadow-xl rounded-xl p-6 md:p-10 transition-all duration-500">
          <img
            src={current.img}
            alt={current.name}
            className="w-20 h-20 rounded-full mx-auto object-cover shadow"
          />
          <p    style={{ fontFamily: 'Lobster, cursive' }} className="text-4xl  text-gray-700 mt-6">"{current.feedback}"</p>
          <h4 className="mt-4 text-xl font-semibold text-gray-900">{current.name}</h4>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={() =>
              setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
            }
            className="bg-lime-500 text-black  text-2xl px-4  font-semibold py-2 rounded-lg hover:bg-lime-600 transition"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
            }
            className="bg-lime-500 text-black  text-2xl px-4  font-semibold py-2 rounded-lg hover:bg-lime-600 transition"
          >
            Next 
          </button>
        </div>
      </div>
    </section>
  );
}
