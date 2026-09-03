import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.js";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">

        <div className="card-body d-flex flex-column">

          <h4 className="card-title">
            {product.name}
          </h4>

          <p className="card-text text-muted">
            {product.description}
          </p>

          <h5 className="mt-auto">
            ${product.price}
          </h5>

          <button
            className="btn btn-dark mt-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;