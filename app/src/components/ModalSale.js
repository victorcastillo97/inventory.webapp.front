import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
const APIGATEWAY_URL = process.env.REACT_APP_APIGATEWAY_URL;

export default function ModalSale(props) {
    const {productSelected, ...modalProps} = props;

    const [dataSale, setDataSale] = useState({
        dni: '',
        name: '',
        product_id: null,
        quantity: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataSale(prevDataSale => ({ ...prevDataSale, [name]: value }));
    };

    const handleSaleProduct = async (event) => {
        event.preventDefault();
        try {
            dataSale["product_id"] = productSelected["id"];
            console.log("dataSale: ", dataSale);
            const response = await axios.post(`${APIGATEWAY_URL}/orders/`, dataSale);
            console.log('Order added:', response.data);
            props.onHide();
        } catch (error) {
            console.error('Error adding Order:', error);
        }
    };

    return (
        <Modal
        {...modalProps}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Sale of product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>DNI of cliente</Form.Label>
                            <Form.Control
                                name="dni"
                                value={dataSale.dni}
                                onChange={handleChange}
                                type="number"
                            />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Name of cliente</Form.Label>
                            <Form.Control
                                name="name"
                                value={dataSale.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNameProduct">
                        <Form.Label>Product</Form.Label>
                        <Form.Control 
                            placeholder={productSelected["name"] || null}
                            readOnly />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                                name="quantity"
                                value={dataSale.quantity}
                                onChange={handleChange}
                                type="number"
                        />
                        </Form.Group>
                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSaleProduct}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
            
        </Modal>
    );
  }