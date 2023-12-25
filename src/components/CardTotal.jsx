import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({ products }) => {
  console.log(products);
  const subTotal = (products.reduce(
    (acc, product) =>
      product.price * product.dampingRate * product.amount + acc,
    0
  )).toFixed(2);
  console.log(subTotal);
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">subTotal</th>
          <td>
            $<span className="subtotal">{subTotal}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax"> {(subTotal * taxRate).toFixed(2)} </span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $<span className="total">{(Number(subTotal) + Number(shipping) + Number(subTotal*taxRate)).toFixed(2)} </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
