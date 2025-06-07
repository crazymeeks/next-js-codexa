import Price from "./Price";
import ProductName from "./ProductName";
const Product = ({ product }) => {

 return (
    <div className="card border border-gray-600 w-40">
      <div className="image">{product.image}</div>
      <ProductName productName={product.name}/>
      <p>{product.description}</p>
      <Price product={product}/>
    </div>
  );
};


export default Product;


