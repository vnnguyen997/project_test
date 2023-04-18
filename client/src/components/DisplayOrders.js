import React, { useState } from 'react';
import axios from 'axios';

function DisplayOrders() {
  const [orders, setOrders] = useState([]);

  const handlePopulateTable = () => {
    fetch('/displayOrders')
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Orders List</h2>
      <button onClick={handlePopulateTable}>Populate Table</button>      
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Creation Date</th>
            <th>Status</th>
            <th>Delivery Date</th>
            <th>Shipping Method</th>
            <th>Customer ID</th>
            <th>Inventory ID</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Name</th>
            <th>Warehouse</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.creationdate}</td>
              <td>{order.status}</td>
              <td>{order.deliverydate}</td>
              <td>{order.shipping_method}</td>
              <td>{order.customer_id}</td>
              <td>{order.inventory_id}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.total_price}</td>
              <td>{order.name}</td>
              <td>{order.warehouse}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayOrders;