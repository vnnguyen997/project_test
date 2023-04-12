import React from 'react';
import axios from 'axios';

function CheckoutButton() {
  const handleCheckout = async () => {
    try {
      const res = await axios.post('/checkout');
      console.log(res.data); // Do something with the response data
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handleCheckout}>
      Checkout
    </button>
  );
}

export default CheckoutButton;