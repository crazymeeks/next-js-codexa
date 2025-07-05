'use client';

import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const ProductList = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="grid md:grid-cols-4 gap-2">
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
  );
};

export default ProductList;