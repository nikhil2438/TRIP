import React, { useState } from "react";
import bgImage from "../assets/abc.jpg"; 

const tabs = [
  { name: "Flights", icon: "✈️" },
  { name: "Hotels", icon: "🏨" },
  { name: "Homestays", icon: "🏡" },
  { name: "Holiday Packages", icon: "🎒" },
  { name: "Trains", icon: "🚆" },
  { name: "Buses", icon: "🚌" },
  { name: "Cabs", icon: "🚖" },
  { name: "Visa", icon: "🛂" },
  { name: "Forex Card & Currency", icon: "💱" },
  { name: "Travel Insurance", icon: "🛡️" },
];

const dynamicForms = {
  Flights: [
    { label: "From", type: "text", placeholder: "Delhi" },
    { label: "To", type: "text", placeholder: "Bengaluru" },
    { label: "Departure", type: "date" },
    { label: "Travellers & Class", type: "text", placeholder: "1 Traveller, Economy" },
  ],
  Hotels: [
    { label: "Location", type: "text", placeholder: "Bengaluru" },
    { label: "Check-in", type: "date" },
    { label: "Check-out", type: "date" },
    { label: "Guests", type: "text", placeholder: "2 Adults, 1 Child" },
  ],
  Homestays: [
    { label: "Location", type: "text", placeholder: "Goa" },
    { label: "Check-in", type: "date" },
    { label: "Check-out", type: "date" },
    { label: "Guests", type: "text", placeholder: "Family, 4 people" },
  ],
  // Add more dynamic forms for other tabs as required...
};

export default function HeaderSection() {
  const [activeTab, setActiveTab] = useState("Flights");

  return (
    <div className="relative">
      <div
        className="h-[400px] bg-cover bg-center sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="sticky top-0 z-50 bg-white/90 shadow-md backdrop-blur-md">
          <div className="flex overflow-x-auto gap-6 px-6 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`flex flex-col items-center min-w-[100px] ${
                  activeTab === tab.name ? "text-blue-600 font-bold" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="text-sm">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-wrap gap-4 justify-between">
            {dynamicForms[activeTab]?.map((field, index) => (
              <div key={index} className="flex-1 min-w-[180px]">
                <label className="block text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border rounded p-2 mt-1"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 text-white px-8 py-2 rounded-full text-lg hover:bg-blue-700">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
