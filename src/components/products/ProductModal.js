import ProductModalContent from "./ProductModalContent";

const ProductModal = ({counter}) => {

    return (
      <>
      <div>Product Modal Counter: {counter}</div>
      <ProductModalContent counter={counter}/>
    </>
    );

};

export default ProductModal;