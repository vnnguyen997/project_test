import React, { useState } from 'react';
import axios from 'axios';

function CheckoutButton() {
  const [customer_id, setCustomerId] = useState('');

  const handleCheckout = async () => {
    try {
      const res = await axios.post('/checkout', { customer_id });
      console.log(res.data); // Do something with the response data
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <label>
        Customer ID:
        <input type="text" value={customer_id} onChange={(e) => setCustomerId(e.target.value)} />
      </label>
      <button onClick={handleCheckout} disabled={!customer_id}>
        Checkout
      </button>
    </div>
  );
}

export default CheckoutButton;