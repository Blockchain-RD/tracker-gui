import { useEffect, useState } from "react"
import { getAllTransaction } from "../helpers/transactions"
import Transaction, { ITransaction } from "./transaction"

export interface ITransactionList {
    [id: string]: ITransaction
}

function Visor() {
    let [transactions, setTransations] = useState<ITransactionList>({}) 
    
    useEffect(() => {
        getAllTransaction()
            .then(response => {
                setTransations(response)
            })
    }, [])

    return (
        <div className="visor">
        {
            Object.keys(transactions).map(
                id => (
                    <Transaction key={transactions[id].Id} {...transactions[id]} />
                )
            )   
        }
        </div>
    )
}

export default Visor