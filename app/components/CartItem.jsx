import React from "react";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/slices/cartSlice.js";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card shadow-sm mb-3">

      <div className="card-body">

        <div className="row align-items-center">

          <div className="col-md-4">
            <h5>{item.name}</h5>
          </div>

          <div className="col-md-2">
            <strong>
              ${item.price}
            </strong>
          </div>

          <div className="col-md-3">

            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >
              -
            </button>

            <strong>
              {item.quantity}
            </strong>

            <button
              className="btn btn-outline-secondary btn-sm ms-2"
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >
              +
            </button>

          </div>

          <div className="col-md-3 text-md-end mt-3 mt-md-0">

            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Remove
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CartItem;