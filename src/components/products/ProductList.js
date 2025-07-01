'use client';

import { useState } from "react";
import ProductModal from "./ProductModal";


const ProductList = () => {

  const [counter, setCounter] = useState(0);


  const handleIncrease = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <div>Count: {counter}</div>
      <div className="flex gap-2">
        <button
          onClick={handleIncrease}
          className="cursor-pointer bg-blue-400 p-2">
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="cursor-pointer bg-red-400 p-2">
          Decrease
        </button>
      </div>

      <ProductModal counter={counter}/>
    </>
  );
};

export default ProductList;