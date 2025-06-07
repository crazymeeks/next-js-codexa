import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";

import Product from "@/component/product/Product";

export default function Home() {

  // dummy api
  const dummyProducts = [
    {
      id: 1,
      name: "Toy",
      description: "This is really a good toy",
      price: "PHP150.00",
      image: "toy.png"
    },
    {
      id: 2,
      name: "Bicycle",
      description: "This is really a good bicycle",
      price: "PHP1,500.00",
      image: "toy.png"
    },
    {
      id: 3,
      name: "Car",
      description: "This is really a good car",
      price: "PHP200.00",
      image: "toy.png"
    },
    {
      id: 4,
      name: "Balloon",
      description: "This is really a good balloon",
      price: "PHP10.00",
      image: "toy.png"
    }
  ];


  return (
    <>
      <Header/>
      <main>
          <section className="grid md:grid-cols-4">
              {dummyProducts.map(product => (
                <Product key={product.id} product={product}/>
              ))}
          </section>
      </main>
      <Footer/>
    </>
  );
}

// about - slug
// localhost:3000/about