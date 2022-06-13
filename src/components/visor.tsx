import { useContext, useEffect, useState } from "react"
import transactionContext from "../context/transactions"
import { getAllTransaction } from "../helpers/transactions"
import Transaction, { ITransaction } from "./transaction"

import './styles.scss'

export interface ITransactionList {
    [id: string]: ITransaction
}

function Visor() {
    const [ transactions, setTransations ] = useContext(transactionContext)
    
    useEffect(() => {
        getAllTransaction()
            .then(response => {
                setTransations(response)
            })
    }, [])

    return (
        <table className="visor">
        {
            Object.keys(transactions).map(
                id => (
                    <Transaction key={transactions[id].Id} {...transactions[id]} />
                )
            )   
        }
        </table>
    )
}

export default Visor