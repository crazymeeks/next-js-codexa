'use client';

import { useState } from "react";

const Registration = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const isFormValid = firstname !== '' && lastname !== '';

  console.log("Render again.");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  

  return (
    <>
    <form>
      <div className="p-4">
          <div className="grid grid-cols-3">
              <div>
                <input type="text" onChange={handleFirstNameChange} placeholder="Enter firstname"/>
                {isFormValid === false && <p className="text-red-400">This field is required</p>}
              </div>
              <input type="text" onChange={handleLastNameChange} placeholder="Enter lastname"/>
              <input type="text" placeholder="Enter MI"/>
          </div>
          <button
            className={`p-2 mt-2 ${isFormValid ? 'bg-black text-white' : 'bg-gray-600 text-gray-500 cursor-not-allowed'}`}>
              Register
            </button>
      </div>

    </form>

    </>
  );
};

export default Registration;