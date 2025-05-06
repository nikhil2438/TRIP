import React, { useState } from 'react';
import NavBar from './NavBar';
import HeaderTabs from './components/HeaderTabs';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Slider2 from './components/Slider';
import EmailForm from './components/EmailForm';  

const App = () => {
  const [activeTab, setActiveTab] = useState('Flights');
  const [showEmailForm, setShowEmailForm] = useState(false); 

  const toggleEmailForm = () => {
    setShowEmailForm((prevState) => !prevState);
  };

  return (
    <div>
      <NavBar />
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      
      <div className="container mx-auto p-4">
        <SearchForm activeTab={activeTab} />
      </div>
      
    
      <div className="text-center my-4">
        <button
          onClick={toggleEmailForm}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Contact Us
        </button>
      </div>

  
      {showEmailForm && (
        <div className="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-content bg-white p-6 rounded-lg max-w-md w-full">
            <button
              onClick={toggleEmailForm}
              className="absolute top-2 right-2 text-xl text-gray-500"
            >
              &times;
            </button>
            <EmailForm />
          </div>
        </div>
      )}

      <Slider />
      <Slider2 />
      <Footer />
    </div>
  );
};

export default App;
