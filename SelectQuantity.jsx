import React, { useState } from 'react';

function SelectQuantity({ initialQuantity, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <select value={quantity} onChange={handleQuantityChange}>
      {[...Array(11).keys()].map(num => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
}

export default SelectQuantity;
