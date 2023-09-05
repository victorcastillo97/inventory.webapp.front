import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
const APIGATEWAY_URL = process.env.REACT_APP_APIGATEWAY_URL;

export default function ModalAddProduct(props) {

    const {addProduct, ...modalProps} = props;

    const [product, setProduct] = useState({
        name: '',
        description: '',
        brand: '',
        price: 0,
        stock: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${APIGATEWAY_URL}/products/`, product);
            console.log('Product added:', response.data);
            props.onHide();
            props.addProduct(response.data)
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <Modal
        {...modalProps}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            placeholder="Name of product"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name="description"
                            placeholder="Description of product"
                            value={product.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            name="brand"
                            placeholder="Brand of product"
                            value={product.brand}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            type="number"
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                type="number"
                            />
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