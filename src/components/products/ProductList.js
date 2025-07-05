'use client';

import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

const ProductList = () => {

  const cart = useSelector((state) => state.cart);
  const isOpen = true;
  const cartItems = [];
  const dispatch = useDispatch();

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          className="relative bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ShoppingBag />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg p-4">
            <h4 className="font-bold mb-2">Shopping Cart</h4>
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-500">You cart is empty.</p>
            ): (
              <ul className="space-y-2">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>Burger x 1</span>
                    <span>PHP300.00</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-4 gap-2 mt-20">
          <Card>
              <CardContent>
                  <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden">
                    <Image
                      src="/burger.webp"
                      alt="Burger"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <h3 className="font-bold">Burger</h3>
                    <p>PHP300.00</p>
                  </div>
                  <Button className="w-full font-bold">ADD TO CART</Button>
              </CardContent>
          </Card>
          <Card>
              <CardContent>
                  <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden">
                    <Image
                      src="/fried-chicken.webp"
                      alt="Fried chicken"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <h3 className="font-bold">Fried Chicken</h3>
                    <p>PHP250.00</p>
                  </div>
                  <Button className="w-full font-bold">ADD TO CART</Button>
              </CardContent>
          </Card>
          <Card>
              <CardContent>
                  <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden">
                    <Image
                      src="/fries.png"
                      alt="Fries"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <h3 className="font-bold">Fries</h3>
                    <p>PHP60.00</p>
                  </div>
                  <Button className="w-full font-bold">ADD TO CART</Button>
              </CardContent>
          </Card>
          <Card>
              <CardContent>
                  <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden">
                    <Image
                      src="/turon.jpg"
                      alt="Turon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <h3 className="font-bold">Turon</h3>
                    <p>PHP15.00</p>
                  </div>
                  <Button className="w-full font-bold">ADD TO CART</Button>
              </CardContent>
          </Card>
      </div>
    </>
  );
};

export default ProductList;