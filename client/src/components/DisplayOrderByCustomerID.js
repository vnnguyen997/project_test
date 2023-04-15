import React, { useState } from 'react';
import axios from 'axios';

function DisplayOrderByCustomerID() {
  const [customer_id, setcustomer_id] = useState('');
  const [orders, setOrders] = useState([]);

  const handleGetOrders = async () => {
    try {
      const response = await axios.get(`/getOrdersByCustomerId/${customer_id}`);
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <label>
        Customer ID:
        <input
          type="number"
          value={customer_id}
          onChange={(e) => setcustomer_id(e.target.value)}
        />
      </label>
      <button onClick={handleGetOrders}>Get Orders</button>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Creation Date</th>
            <th>Status</th>
            <th>Delivery Date</th>
            <th>Customer ID</th>
            <th>Shipping_method</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.creationdate}</td>
              <td>{order.status}</td>
              <td>{order.deliverydate}</td>
              <td>{order.customer_id}</td>
              <td>{order.shipping_method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayOrderByCustomerID;