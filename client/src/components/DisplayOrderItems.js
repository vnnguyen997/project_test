import React, { useState } from 'react';
import axios from 'axios';

function DisplayOrderItems() {
  const [order_id, setOrderId] = useState('');
  const [orderItems, setOrderItems] = useState([]);

  const handleGetOrderItems = async () => {
    try {
      const response = await axios.get(`/getOrderItemsByOrderId/${order_id}`);
      setOrderItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Order Items</h2>
      <label>
        Order ID:
        <input
          type="number"
          value={order_id}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </label>
      <button onClick={handleGetOrderItems}>Get Order Items</button>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Inventory ID</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item) => (
            <tr key={item.id}>
              <td>{item.order_id}</td>
              <td>{item.inventory_id}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayOrderItems;