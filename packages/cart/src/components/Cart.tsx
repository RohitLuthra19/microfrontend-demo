import React from "react";
import { Table, Row, Col, Card } from "react-bootstrap";
import { RootStateOrAny, useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state: RootStateOrAny) => state.items);
  const count = 1;
  return (
    <Table striped>
      <thead>
        <tr>
          <th colSpan={2}>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ name, id, image, price }: any) => (
          <tr key={id}>
            <td width="5%">
              <img src={image} style={{ maxHeight: 50 }} />
            </td>
            <td width="50%">{name}</td>
            <td width="15%">{count}</td>
            <td width="15%">₹{price}</td>
            <td width="15%">₹{count * price}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4}>Grand Total</td>
          <td id="total">
            ₹
            {items.reduce(
              (a: number, { count = 1, price }: any) => a + count * price,
              0
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Cart;
