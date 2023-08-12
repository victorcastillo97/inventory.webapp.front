import React from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ModalAddProduct from "./ModalAddProduct"

export default function Management(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div className="my-2 navbar navbar-expand-lg">
            <Container>
            <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>

                <div className="ms-auto">
                    <Button variant="primary" onClick={() => setModalShow(true)}>Add product</Button>
                </div>

                <ModalAddProduct
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>
        </div>
    );
}