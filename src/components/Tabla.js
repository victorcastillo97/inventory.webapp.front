import React from "react";
import Table from 'react-bootstrap/Table';
import ButtonsManageProducts from "./ButtonsManageProducts";

export default function Tabla(props) {
  console.log("Manage Tabla")
  console.log(props)
  return (
    <Table striped bordered hover size="sm" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Leche</td>
          <td>Leche evaporada</td>
          <td>Gloria</td>
          <td>2.5</td>
          <td>26</td>
          <td><ButtonsManageProducts onHideDelete={props.onHideDelete} onHideSale={props.onHideSale}/></td>
        </tr>
      </tbody>
    </Table>
  );
}