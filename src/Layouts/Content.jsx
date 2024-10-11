import { useEffect, useState } from "react";
import { motion } from "framer-motion";

//? ------------IMAGES -------------------
import Pantum from "../assets/Pantum-web.jpg";
import Pantum2 from "../assets/pantum-web-nbanner.jpg";
import Pantum3 from "../assets/pantum-we-scaled.jpg";

import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

import Warrent from "../components/common/Warrent";

const images = [Pantum, Pantum2, Pantum3];

const Content = () => {
  const [index, setIndex] = useState(0);


  const nextSlider = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlider = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlider = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-full h-[80vh] overflow-hidden">
        {images.map((image, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
            initial={{ scale: 1 }}
            animate={{ scale: i === index ? 1.1 : 1 }}
            transition={{ duration: 1 }}
          />
        ))}

        <button
          onClick={prevSlider}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-neutral-900 bg-opacity-50 p-2 rounded text-JmReded font-semibold"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlider}
          className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-neutral-900 bg-opacity-50 p-2 rounded text-JmReded font-semibold"
        >
          <IoIosArrowForward size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlider(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#1d81f9]" : "bg-neutral-800/50"
              }`}
            />
          ))}
        </div>
      </div>
      <Warrent />
    </div>
  );
};

export default Content;
