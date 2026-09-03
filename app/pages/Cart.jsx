import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../components/CartItem.jsx";

import {
  clearCart
} from "../redux/slices/cartSlice.js";

function Cart() {
  const items = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">
        Shopping Cart
      </h1>

      {items.length === 0 ? (

        <div className="alert alert-info text-center">
          Your cart is empty.
        </div>

      ) : (

        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <div className="card shadow-sm mt-4">
            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center">

                <h4>
                  Total: ${total.toFixed(2)}
                </h4>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch(clearCart())
                  }
                >
                  Clear Cart
                </button>

              </div>

            </div>
          </div>
        </>

      )}

    </div>
  );
}

export default Cart;