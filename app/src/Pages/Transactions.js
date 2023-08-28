import React from "react";
import TableTransactions from "../components/TableTransactions"

export default function Transactions(){
    return(
        <div style={{ width: '80%', margin: '0 auto' }}>
            <div className="my-4">
                <h3 className="me-0">Transactions</h3>
            </div>
            <TableTransactions/>
        </div>
    );
}