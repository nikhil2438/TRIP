import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import abcImage from "../assets/abc.jpg";
const cards = [
    { id: 1, title: "Mountain Adventure", image: abcImage },
    { id: 2, title: "Desert Safari", image: abcImage },
    { id: 3, title: "City Lights", image: abcImage },
    { id: 4, title: "Beach Vibes", image: abcImage },
    { id: 5, title: "Forest Escape", image: abcImage },
    { id: 6, title: "Snowy Peaks", image: abcImage },
  ];
  

const Slider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      sliderRef.current.scrollLeft -= scrollAmount;
    } else {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative w-full px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">🚗 Explore Rides</h2>

      <div className="relative">
        
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        
        <div
          ref={sliderRef}
          className="flex overflow-x-auto no-scrollbar space-x-6 scroll-smooth px-8"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[250px] max-w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.03] flex-shrink-0"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>


        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
