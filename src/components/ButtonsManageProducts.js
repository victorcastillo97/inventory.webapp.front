import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function ButtonsManageProducts(props){
    console.log("Manage products")
    console.log(props)
    return(
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={props.onHideDelete}>Delete</Button>
            <Button variant="secondary">Edit</Button>
            <Button variant="secondary" onClick={props.onHideSale}>Sale</Button>
        </ButtonGroup>
    );
    
}
    