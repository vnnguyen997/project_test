import React, { useState } from 'react';
import axios from 'axios';

function DisplayInventoryStock() {
  const [stock, setStock] = useState(null);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState('');

  const handleGetStock = async () => {
    try {
      const response = await axios.get(`/getInventoryStock/${itemId}`);
      setStock(response.data.stock);
      setError(null);
    } catch (err) {
      setError(err.message);
      setStock(null);
    }
  };

  return (
    <div>
      <h2>Inventory Stock Lookup</h2>
      <div>
        <label>
          Item ID:
          <input type="text" value={itemId} onChange={e => setItemId(e.target.value)} />
        </label>
        <button onClick={handleGetStock}>Get Stock</button>
      </div>
      {stock !== null && <p>Stock: {stock}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default DisplayInventoryStock;