import { getAllTransaction } from "../helpers/transactions"
import Transaction, { ITransaction } from "./transaction"



function Visor() {
    let transactions = getAllTransaction()
    
    return (
        <div className="visor">
        {
            transactions.map(
                (transaction) => (
                    <Transaction key={transaction.Id} {...transaction} />
                )
            )   
        }
        </div>
    )
}

export default Visor