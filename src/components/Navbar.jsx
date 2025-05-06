import React, { useState } from 'react';

const NavBar = () => {
  const [activeForm, setActiveForm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  const handleLoginClick = () => setActiveForm('login');
  const handleRegisterClick = () => setActiveForm('register');
  const closeForm = () => setActiveForm('');

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="font-bold">MakeMyTrip</div>
        
        {/* Hamburger icon */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`lg:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button onClick={handleLoginClick} className="bg-blue-600 p-2 rounded">Login</button></li>
          <li><button onClick={handleRegisterClick} className="bg-blue-600 p-2 rounded">Register</button></li>
        </ul>
      </div>

      {/* Conditional rendering based on activeForm state */}
      {activeForm === 'login' && <LoginForm closeForm={closeForm} />}
      {activeForm === 'register' && <RegisterForm closeForm={closeForm} />}
    </nav>
  );
};

const LoginForm = ({ closeForm }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
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
    localStorage.setItem('loginData', JSON.stringify(loginData));
    alert('Login data saved to localStorage!');
    console.log('Saved Login data:', loginData);
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
    name: '',
    email: '',
    password: '',
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
    localStorage.setItem('registerData', JSON.stringify(registerData));
    alert('Registration data saved to localStorage!');
    console.log('Saved Register data:', registerData);
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
