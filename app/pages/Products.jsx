import React from "react";
import ProductCard from "../components/ProductCard.jsx";

function Products() {
  const products = [
    {
      id: 1,
      name: "React Book",
      description: "Learn React from beginner to advanced.",
      price: 25
    },
    {
      id: 2,
      name: "JavaScript Course",
      description: "Modern JavaScript and ES6 concepts.",
      price: 40
    },
    {
      id: 3,
      name: "Redux Guide",
      description: "Learn Redux Toolkit and state management.",
      price: 30
    },
    {
      id: 4,
      name: "Web Development Course",
      description: "HTML, CSS, JavaScript and React.",
      price: 50
    },
    {
      id: 5,
      name: "UI Design Course",
      description: "Learn responsive and modern UI design.",
      price: 35
    },
    {
      id: 6,
      name: "Programming Notebook",
      description: "Write your programming notes and ideas.",
      price: 10
    }
  ];

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1>Products</h1>

        <p className="text-muted">
          Add your favorite products to the cart.
        </p>
      </div>

      <div className="row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;