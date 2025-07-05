'use client';

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ShoppingBag, Trash2 } from "lucide-react";

const ProductList = () => {

  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);

  console.log("cart: ", cart);
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = [];
  const dispatch = useDispatch();


  const handleCartClick = () => {
    // false
    // !false = true
    // !true = false
    setIsOpen((prev) => !prev);
  };


  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.addToCart(product));
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleCartClick}
          className="relative bg-white p-3 rounded-full shadow hover:bg-gray-100 transition hover:cursor-pointer"
        >
          <ShoppingBag />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cart.overall_quantity}
          </span>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg p-4">
            <h4 className="font-bold mb-2">Shopping Cart</h4>
            {cart.overall_quantity <= 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ): (
              <ul className="space-y-2">
                {cart.items.map((item) => (
                  <li key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>PHP{item.price}</span>
                    <span>
                      <Trash2 className="h-4 w-4 text-red-500 hover:cursor-pointer"/>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-4 gap-2 mt-20">
        {product && product.products.length > 0 && product.products.map((product) => (
          <Card key={product.id}>
              <CardContent>
                  <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <h3 className="font-bold">{product.name}</h3>
                    <p>PHP{product.price}</p>
                  </div>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full font-bold hover:cursor-pointer">
                    ADD TO CART
                  </Button>
              </CardContent>
          </Card>
        ))}
          
      </div>
    </>
  );
};

export default ProductList;