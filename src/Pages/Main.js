import React from "react";
import Tabla from '../components/Tabla';
import Management from '../components/Management';
import ModalDelete from '../components/ModalDelete';
import ModalSale from '../components/ModalSale';

export default function Main(){
    const [modalDelete, setModalDelete] = React.useState(false);
    const [modalSale, setModalSale] = React.useState(false);

    return(
        <div style={{ width: '80%', margin: '0 auto' }}>
            <Management/>
            <Tabla onHideDelete={() => setModalDelete(true)} onHideSale={() => setModalSale(true)}/>
            <ModalDelete show={modalDelete} onHide={() => setModalDelete(false)} />
            <ModalSale show={modalSale} onHide={() => setModalSale(false)} />
        </div>
    );
}
