import React, { useState } from "react";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    return setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        {orderType}: {orders}
        <button className="btn btn-primary" onClick={orderOne}>
          Add
        </button>
      </li>
    </div>
  );
};

export default Order;
