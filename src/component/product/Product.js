'use client';

import { useState } from "react";
import Price from "./Price";
import ProductName from "./ProductName";
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "@/redux/features/cart/cartSlice";


// state manage
// state is react hook

const Product = ({ product }) => {

  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(0);

  const [email, setEmail] = useState(null);

  console.log("cart: ", cart);

  const buttonTitle = "Add to Cart";


  const handleAddToCart = () => {
    dispatch(cartSlice.actions.addToCart());
  };

  return (
      <Card>
        <div className="image">{product.image}</div>
        <ProductName productName={product.name}/>
        <p>{product.description}</p>
        <Price product={product}/>

        <input type="text" onKeyDown={(event) => setQuantity(event.target.value)}/>

        <Button onClick={handleAddToCart} title={buttonTitle} className="bg-blue-500 cursor-pointer"/>
        
      </Card>
    );
};


export default Product;


