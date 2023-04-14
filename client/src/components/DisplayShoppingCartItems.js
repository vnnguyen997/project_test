import React, { useState } from 'react';
import axios from 'axios';

function DisplayShoppingCartItems() {
  const [cartId, setCartId] = useState('');
  const [items, setItems] = useState([]);

  const handleGetItems = async () => {
    try {
      const response = await axios.get(`/getItemsByCartId/${cartId}`);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart Items</h2>
      <label>
        Cart ID:
        <input
          type="number"
          value={cartId}
          onChange={(e) => setCartId(e.target.value)}
        />
      </label>
      <button onClick={handleGetItems}>Get Items</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cart ID</th>
            <th>Inventory ID</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Modified At</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.cart_id}</td>
              <td>{item.inventory_id}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.created_at}</td>
              <td>{item.modified_at}</td>
              <td>{item.totalprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayShoppingCartItems;