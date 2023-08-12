import React from "react";
import Table from 'react-bootstrap/Table';

export default function TableTransactions(){
    return(
        <Table striped bordered hover size="sm" >
            <thead>
                <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Name of client</th>
                <th>Name of product</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Mount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>18/08/2023</td>
                <td>Mark</td>
                <td>Yogurt</td>
                <td>Gloria</td>
                <td>12</td>
                <td>360</td>
                </tr>
            </tbody>
        </Table>
    );
}