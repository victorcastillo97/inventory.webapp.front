import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function ModalEditProduct(props){

    const {productSelected, ...modalProps} = props;

    console.log("loading----")
    console.log(productSelected)

    const [editProduct, setEditProduct] = useState({
        id: '',
        name: '',
        description: '',
        brand: '',
        price: 0,
        stock: 0
    });

    useEffect(() => {
        if(productSelected) { // Comprueba si productSelected tiene valor
            setEditProduct({
                id: productSelected.id || '',
                name: productSelected.name || '',
                description: productSelected.description || '',
                brand: productSelected.brand || '',
                price: productSelected.price || 0,
                stock: productSelected.stock || 0
            });
        }
    }, [productSelected]);

    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put('http://localhost:8000/products/', editProduct);
            console.log('Product updated:', response.data);
            props.onHide();
        } catch (error){
            console.error('Error updating product:', error);
        }
    };

    return (
        <Modal
        {...modalProps}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            placeholder="Name of product"
                            value={editProduct.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name="description"
                            placeholder="Description of product"
                            value={editProduct.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            name="brand"
                            placeholder="Brand of product"
                            value={editProduct.brand}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            value={editProduct.price}
                            onChange={handleChange}
                            type="number"
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                name="stock"
                                value={editProduct.stock}
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
    )
}