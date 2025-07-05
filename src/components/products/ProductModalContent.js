import { useSelector } from "react-redux";

const ProductModalContent = () => {

  const cart = useSelector((state) => state.cart);

  return (
      <>
      <div>Product Modal Content Counter: {cart.counter}</div>
    </>
    );
};

export default ProductModalContent;