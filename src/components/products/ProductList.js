'use client';

import ProductModal from "./ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "@/redux/features/cart/cartSlice";

const ProductList = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(cartSlice.actions.handleIncrease());
  };

  const handleDecrease = () => {
    dispatch(cartSlice.actions.handleDecrease());
  };

  return (
    <>
      <div>Count: {cart.counter}</div>
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

      <ProductModal/>
    </>
  );
};

export default ProductList;