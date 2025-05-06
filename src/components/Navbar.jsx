import React, { useState } from 'react';

const NavBar = () => {
  const [activeForm, setActiveForm] = useState(""); // Track which form to show: 'login', 'register'

  const handleLoginClick = () => setActiveForm('login'); // Trigger Login form
  const handleRegisterClick = () => setActiveForm('register'); // Trigger Register form
  const closeForm = () => setActiveForm(""); // Close the form (reset to empty state)

  return (
    <nav className="bg-blue-800 text-white p-4">
      <ul className="flex justify-between">
        <li className="font-bold">MakeMyTrip</li>
        <li className="space-x-4">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <button onClick={handleLoginClick} className="bg-blue-600 p-2 rounded">Login</button>
          <button onClick={handleRegisterClick} className="bg-blue-600 p-2 rounded">Register</button>
        </li>
      </ul>

      {/* Conditional rendering based on activeForm state */}
      {activeForm === 'login' && <LoginForm closeForm={closeForm} />}
      {activeForm === 'register' && <RegisterForm closeForm={closeForm} />}
    </nav>
  );
};

const LoginForm = ({ closeForm }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify(loginData));
    alert("Login data saved to localStorage!");
    console.log("Saved Login data:", loginData);
    closeForm();
  };

  return (
    <div className="modal fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-content bg-white p-6 rounded-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-xl text-gray-500"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} className="form">
          <h2 className="text-2xl mb-4">Login</h2>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const RegisterForm = ({ closeForm }) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registerData", JSON.stringify(registerData));
    alert("Registration data saved to localStorage!");
    console.log("Saved Register data:", registerData);
    closeForm();
  };

  return (
    <div className="modal fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-content bg-white p-6 rounded-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-xl text-gray-500"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} className="form">
          <h2 className="text-2xl mb-4">Register</h2>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
 
