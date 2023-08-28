import React, { useEffect, useState } from "react";
import Tabla from '../components/Tabla';
import Management from '../components/Management';
import ModalDelete from '../components/ModalDelete';
import ModalSale from '../components/ModalSale';
import ModalEditProduct from "../components/ModalEditProduct";
import axios from 'axios';

export default function Main(){
    const [products, setProducts] = useState([]); // Añade este estado para almacenar los productos
    const [showSaleModal, setShowSaleModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const [productIdSelected, setProductIdSelected] = useState(null);
    const [productSelected, setProductSelected] = useState({});

    //Modal delete
    function deleteProduct(productId){
      setProducts(products.filter(product => product.id !== productId));
    }

    const fetcDeleteProduct = async (productId) => {
      try {
        const _response = await axios.delete(`http://localhost:8000/products/${productId}`);
        console.log(_response)
        deleteProduct(productId)
      } catch (error) {
        console.error('Error al eliminar producto:', productId);
      }
    };
    
    const openDeleteModal = (productId) => {
      setProductIdSelected(productId);
      setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
      setProductIdSelected(null);
      setShowDeleteModal(false);
    };

    const handleDeleteProduct = () => {
      fetcDeleteProduct(productIdSelected);
      closeDeleteModal();
    };

    //Modal sales
    const openSaleModal = (productId) => {
      setProductIdSelected(productId);
      setShowSaleModal(true);
    };

    const closeSaleModal = () => {
      setProductIdSelected(null);
      setShowSaleModal(false);
    };

    //Modal Edit product
    const closeEditModal = () => {
      setProductIdSelected(null);
      setShowEditModal(false);
    };

    const openEditModal = (productId) => {
      setProductIdSelected(productId);
      setShowEditModal(true);
    };


    //Modal Product
    function addProduct(newProduct) {
      setProducts([...products, newProduct]);
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/products/');
            setProducts(response.data);
          } catch (error) {
            console.error('Error al obtener los productos:', error);
          }
        };
        fetchData();
    }, []); // El array vacío significa que este hook se ejecutará solo una vez, cuando el componente se monte

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      if(productIdSelected !== null){
        setProductSelected(products.find(product => product.id === productIdSelected));
      }else{
        setProductSelected({});
      };
    }, [productIdSelected]);

    useEffect(() => {
      console.log("Selected after update: ", productSelected);
    }, [productSelected]);

    return(
        <div style={{ width: '80%', margin: '0 auto' }}>
            <Management addProduct={addProduct}/>
            <Tabla products={products} openSaleModal={openSaleModal} openDeleteModal={openDeleteModal} openEditModal={openEditModal}/>
            <ModalDelete handleDeleteProduct={handleDeleteProduct} show={showDeleteModal} onHide={closeDeleteModal} />
            {showEditModal && <ModalEditProduct show={showEditModal} productSelected={productSelected} onHide={closeEditModal}/>}
            <ModalSale show={showSaleModal} productSelected={productSelected} onHide={closeSaleModal} />
        </div>
    );
}