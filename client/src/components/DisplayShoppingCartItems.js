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
            <th>Inventory ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Item Group</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Warehouse</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.inventory_id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.weight}</td>
              <td>{item.price}</td>
              <td>{item.itemgroup}</td>
              <td>{item.stock}</td>
              <td>{item.image}</td>
              <td>{item.warehouse}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.totalprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayShoppingCartItems;