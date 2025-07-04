import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="relative w-full h-screen bg-black text-white flex items-center justify-center">
      {/* Background Image (Optional but aesthetic) */}
      <img
        src="https://cdn.pixabay.com/photo/2019/11/04/09/00/mountains-4593800_1280.jpg"
        alt="404"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="text-6xl sm:text-8xl font-bold text-lime-400 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </h1>
        <p
          className="text-xl sm:text-2xl mb-6 text-gray-300"
          style={{ fontFamily: "'Lobster', cursive" }}
        >
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
