'use client';

import { useState, useEffect } from "react";
import Button from "@/component/ui/button/Button";

const Registration = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const [firstLoad, setFirstLoad] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // const isFormValid = firstname !== '' && lastname !== '';

  useEffect(() => {
    if (firstname && lastname) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [firstname, lastname]);

  const handleFirstNameChange = (e) => {
    
    setTimeout(() => {
      setFirstName(e.target.value);
    }, 2000);
    
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
          <Button
            title={"Register"}
            className={`p-2 mt-2 ${isFormValid ? 'bg-black text-white' : 'bg-gray-600 text-gray-500 cursor-not-allowed'}`}>
              
          </Button>
      </div>

    </form>

    </>
  );
};

export default Registration;