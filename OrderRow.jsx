import React from 'react';
import SelectQuantity from './SelectQuantity'; 
function OrderRow({ item }) {
  const handleQuantityChange = (newQuantity) => {
    console.log(`Quantity for ${item.name} changed to ${newQuantity}`);
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <SelectQuantity initialQuantity={0} onQuantityChange={handleQuantityChange} />
      </td>
    </tr>
  );
}

export default OrderRow;
