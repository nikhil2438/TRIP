import React from "react";
import { motion } from "framer-motion";

const cabData = [
  {
    from: "Delhi",
    to: ["Agra", "Jaipur", "Dehradun", "Haridwar", "Chandigarh"],
    image: "https://img.icons8.com/color/96/mountain.png",
  },
  {
    from: "Agra",
    to: ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
    image: "https://img.icons8.com/office/96/mountains.png",
  },
  {
    from: "Jaipur",
    to: ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
    image: "https://img.icons8.com/fluency/96/mountain.png",
  },
  {
    from: "Pune",
    to: ["Mumbai", "Shirdi", "Mahabaleshwar", "Nasik", "Aurangabad"],
    image: "https://img.icons8.com/external-flat-juicy-fish/60/external-mountain-nature-flat-flat-juicy-fish.png",
  },
  {
    from: "Mumbai",
    to: ["Pune", "Nasik", "Shirdi", "Lonavala", "Mahabaleshwar"],
    image: "https://img.icons8.com/dusk/64/mountain.png",
  },
  {
    from: "Chandigarh",
    to: ["New Delhi", "Shimla", "Manali", "Gurgaon", "Noida"],
    image: "https://img.icons8.com/ultraviolet/80/mountain.png",
  },
  {
    from: "Bangalore",
    to: ["Ooty", "Madikeri", "Coorg", "Vellore"],
    image: "https://img.icons8.com/color/96/snow-mountain.png",
  },
  {
    from: "Chennai",
    to: ["Vellore", "Pondicherry", "Bangalore", "Tirupati"],
    image: "https://img.icons8.com/color/96/mountain-climbing.png",
  },
  {
    from: "Dehradun",
    to: ["Mussoorie", "New Delhi", "Gurgaon", "Noida", "Faridabad"],
    image: "https://img.icons8.com/external-vectorslab-flat-vectorslab/68/external-mountain-winter-holiday-vectorslab-flat-vectorslab.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const CabsCardGrid = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-10 sm:p-12 rounded-xl min-h-screen">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        🚖 Book Cabs From Your City
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cabData.map((cab, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-5 flex items-center space-x-4 transform hover:-translate-y-1 hover:scale-[1.03] transition duration-300 ease-in-out border border-gray-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <img
              src={cab.image}
              alt={`From ${cab.from}`}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Cabs From {cab.from} To
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium">
                {cab.to.join(", ")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CabsCardGrid;
