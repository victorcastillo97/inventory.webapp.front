import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Tabla(props) {
  console.log("Manage Tabla")

  const {openDeleteModal,openSaleModal,openEditModal, ...modalProps} = props;

  return (
    <Table 
      {...modalProps}
      striped bordered hover size="sm" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => openDeleteModal(product.id)}>Delete</Button>
                <Button variant="secondary" onClick={() => openEditModal(product.id)}>Edit</Button>
                <Button variant="secondary" onClick={() => openSaleModal(product.id)}>Sale</Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}