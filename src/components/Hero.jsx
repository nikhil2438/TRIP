import React, { useState } from 'react';

const tabs = ['All Offers', 'Bank Offers', 'Flights', 'Hotels', 'Holidays', 'Trains', 'Cabs', 'Bus', 'Forex'];

const offersData = {
  'All Offers': Array(6).fill({
    image: 'https://via.placeholder.com/300x200',  
    title: 'For a royal summer getaway:',
    subtitle: 'DOM HOTELS',
    description: 'Enjoy Up to 60% Lower Prices* on Rajasthan’s Luxe Stays!',
    link: 'VIEW DETAILS',
  }),
  'Bank Offers': Array(6).fill({
    image: 'https://via.placeholder.com/300x200',  
    title: 'Special Bank Offers!',
    subtitle: 'ALL BANKS',
    description: 'Enjoy discounts and cashback with exclusive bank offers.',
    link: 'EXPLORE NOW',
  }),
  'Flights': Array(6).fill({
    image: 'https://via.placeholder.com/300x200',  
    title: 'LIVE NOW: Sale by Malaysia Airlines!',
    subtitle: 'INTL FLIGHTS',
    description: 'With flight fares starting @ ₹14,799*',
    link: 'EXPLORE NOW',
  }),
  'Hotels': Array(6).fill({
    image: 'https://via.placeholder.com/300x200',  
    title: 'SIMPLY BETTER STAYS AT GINGER HOTELS:',
    subtitle: 'DOM HOTELS',
    description: 'Enjoy FLAT 10% Savings* on Stay + FREE* Breakfast.',
    link: 'VIEW DETAILS',
  }),
  'Holidays': Array(6).fill({
    image: 'https://via.placeholder.com/300x200', 
    title: 'Amazing Holiday Deals!',
    subtitle: 'DOM HOLIDAY PACKAGES',
    description: 'Up to 50% off on holiday packages to exotic destinations!',
    link: 'VIEW DETAILS',
  }),
  'Trains': Array(6).fill({
    image: 'https://via.placeholder.com/300x200', 
    title: 'Book Your Train Tickets!',
    subtitle: 'INDIAN RAILWAYS',
    description: 'Book now and get discounts on train tickets!',
    link: 'BOOK NOW',
  }),
  'Cabs': Array(6).fill({
    image: 'https://via.placeholder.com/300x200',  
    title: 'Ride in Comfort!',
    subtitle: 'CABS',
    description: 'Get the best rates on cabs for your trips.',
    link: 'BOOK A CAB',
  }),
  'Bus': Array(6).fill({
    image: 'https://via.placeholder.com/300x200',  
    title: 'Book Your Bus Tickets Now!',
    subtitle: 'INTERCITY BUSES',
    description: 'Book intercity buses at affordable prices.',
    link: 'BOOK NOW',
  }),
  'Forex': Array(6).fill({
    image: 'https://via.placeholder.com/300x200',  
    title: 'Best Forex Deals!',
    subtitle: 'FOREX',
    description: 'Get the best rates for your foreign currency exchange.',
    link: 'EXCHANGE NOW',
  }),
};

const Offers = () => {
  const [activeTab, setActiveTab] = useState('All Offers');
  const activeOffers = offersData[activeTab] || [];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex overflow-x-auto space-x-4 border-b pb-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-semibold whitespace-nowrap px-4 py-2 border-b-2 transition-all duration-300 ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:border-blue-500 hover:text-blue-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
        {activeOffers.map((offer, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden group"
            style={{ backgroundImage: `url('https://via.placeholder.com/300x200')` }} 
          >
            
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-all"></div>

            
            <div className="relative p-6 z-10 text-white">
              <p className="text-xs">{offer.subtitle}</p>
              <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
              <p className="text-sm mt-2">{offer.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all">
                {offer.link}
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {activeOffers.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No offers available for this category.</div>
      )}
    </div>
  );
};

export default Offers;
 
