import React, { useState } from 'react';
import axios from 'axios';

const BulkAddToCart = () => {
  const [customer_id, setcustomer_id] = useState('');
  const [inventoryIds, setInventoryIds] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/bulkAddItemsToCart', { customer_id, inventory_ids: inventoryIds, quantities });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddItem = () => {
    setInventoryIds([...inventoryIds, '']);
    setQuantities([...quantities, '']);
  };

  const handleInventoryIdChange = (event, index) => {
    const newInventoryIds = [...inventoryIds];
    newInventoryIds[index] = event.target.value;
    setInventoryIds(newInventoryIds);
  };

  const handleQuantityChange = (event, index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = event.target.value;
    setQuantities(newQuantities);
  };

  return (
    <div>
      <h2>Add Item to Cart</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer ID:
          <input type="text" value={customer_id} onChange={(event) => setcustomer_id(event.target.value)} />
        </label>
        <br />
        {inventoryIds.map((inventoryId, index) => (
          <div key={index}>
            <label>
              Inventory ID:
              <input type="text" value={inventoryId} onChange={(event) => handleInventoryIdChange(event, index)} />
            </label>
            <label>
              Quantity:
              <input type="number" value={quantities[index]} onChange={(event) => handleQuantityChange(event, index)} />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>Add Item</button>
        <br />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default BulkAddToCart;