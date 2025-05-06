import React, { useState } from 'react';
import EmailForm from './EmailForm';  // Import the EmailForm component

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false); // State to toggle visibility of the email form

  const toggleEmailForm = () => {
    setShowEmailForm((prevState) => !prevState); // Toggle the form visibility
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      
      {/* Button to open the email form */}
      <div className="text-center mb-4">
        <button
          onClick={toggleEmailForm}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send Us an Email
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
    </div>
  );
};

export default Contact;
