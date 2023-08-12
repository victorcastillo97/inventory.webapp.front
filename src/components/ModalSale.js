import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ModalSale(props) {
    return (
        <Modal
        {...props}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Sale of product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Name of cliente</Form.Label>
                        <Form.Control placeholder="Name" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNameProduct">
                        <Form.Label>Product</Form.Label>
                        <Form.Control placeholder="Name of product" readOnly />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number"/>
                        </Form.Group>
                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
            
        </Modal>
    );
  }