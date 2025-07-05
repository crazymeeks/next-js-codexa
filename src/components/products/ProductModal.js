import ProductModalContent from "./ProductModalContent";
import { useSelector } from "react-redux";


const ProductModal = () => {

    const cart = useSelector((state) => state.cart);

    return (
      <>
      <div>Product Modal Counter: {cart.counter}</div>
      <ProductModalContent/>
    </>
    );

};

export default ProductModal;