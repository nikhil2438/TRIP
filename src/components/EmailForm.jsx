import React, { useState } from 'react';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, save to localStorage, but in real use, you'll send this to a backend
    localStorage.setItem("emailData", JSON.stringify(emailData));
    alert('Email has been sent!');
    console.log('Form data saved:', emailData);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl mb-4 text-center font-bold">Send an Email</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={emailData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
