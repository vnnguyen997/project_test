import React, { useState } from 'react';
import axios from 'axios';

function DisplayItemByItemID() {
  const [inventory_id, setinventory_id] = useState('');
  const [item, setItem] = useState(null);

  const handleGetItem = async () => {
    try {
      const response = await axios.get(`/findItemById/${inventory_id}`);
      setItem(response.data.item);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Inventory Item</h2>
      <label>
        Inventory ID:
        <input
          type="number"
          value={inventory_id}
          onChange={(e) => setinventory_id(e.target.value)}
        />
      </label>
      <button onClick={handleGetItem}>Get Item</button>
      {item && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Itemgroup</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Warehouse</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.inventory_id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.weight}</td>
              <td>{item.price}</td>
              <td>{item.itemgroup}</td>
              <td>{item.stock}</td>
              <td>{item.image}</td>
              <td>{item.warehouse}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayItemByItemID;