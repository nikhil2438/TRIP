import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Why MakeMyTrip?</h3>
          <p className="text-sm leading-relaxed">
            Established in 2000, MakeMyTrip has since positioned itself as one
            of the leading companies, providing great offers, competitive
            airfares, exclusive discounts, and a seamless online booking
            experience. Book flights, hotels, or holiday packages with ease.
            Enjoy perks like Instant Discounts, Fare Calendar, MyRewardsProgram,
            and MyWallet—updated regularly to meet evolving needs.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Booking Flights with MakeMyTrip
          </h3>
          <p className="text-sm leading-relaxed">
            Find the best flight deals and cheap air tickets on our website or
            app. As India’s top travel portal, we offer affordability,
            convenience, and 24/7 support. Serving over 5 million customers,
            we help you discover and book your perfect flight quickly and
            easily.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Domestic Flights with MakeMyTrip
          </h3>
          <p className="text-sm leading-relaxed">
            India’s #1 flight booking site. Enjoy lowest prices with our
            cheapest fare guarantee, instant fare drop alerts, refunds,
            rebooking, price comparisons, and more.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex space-x-6 text-xl">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-4 md:mt-0">
          © 2025 MAKEMYTRIP PVT. LTD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;