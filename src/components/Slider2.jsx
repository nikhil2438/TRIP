import React, { useRef } from "react";
import abcImage from "../assets/abc.jpg"; // Make sure this path is correct

const wonders = [
  { title: "Shimla's Best Kept Secret", image: abcImage },
  { title: "Tamil Nadu's Charming Hill Town", image: abcImage },
  { title: "Picturesque Gateway to Himalayas", image: abcImage },
  { title: "Quaint Little Hill Station in Gujarat", image: abcImage },
  { title: "A pleasant summer retreat and a snowy winter wonderland!", image: abcImage },
  { title: "Seaside Retreat in West Bengal", image: abcImage },
];

const LesserKnownWonders = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="py-10 px-4 md:px-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Unlock Lesser-Known Wonders of India
      </h2>
      <div className="relative">
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-200"
        >
          &#8592;
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {wonders.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-80 sm:w-52 sm:h-64 bg-cover bg-center rounded-lg relative shadow-md"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 via-transparent to-transparent text-white text-sm font-semibold rounded-b-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-200"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default LesserKnownWonders;
