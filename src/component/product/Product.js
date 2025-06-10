'use client';

import { useState } from "react";
import Price from "./Price";
import ProductName from "./ProductName";
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";


// state manage
// state is react hook

const Product = ({ product }) => {

  const [quantity, setQuantity] = useState(0);

  const [email, setEmail] = useState(null);

  console.log("quantity: ", quantity);

  const buttonTitle = "Add to Cart";

  return (
      <Card>
        <div className="image">{product.image}</div>
        <ProductName productName={product.name}/>
        <p>{product.description}</p>
        <Price product={product}/>

        <input type="text" onKeyDown={(event) => setQuantity(event.target.value)}/>

        <Button title={buttonTitle} className="bg-blue-500"/>
        
      </Card>
    );
};


export default Product;


