import { ITransaction } from "../components/transaction"
import { ITransactionList } from "../components/visor"

const SERVER_MESSAGE_GET_TRANSACTION_PATH = "http://localhost:8080/transaction?message=transactionKeeperGetAllTransactions"
const SERVER_MESSAGE_ADD_TRANSACTION_PATH = "http://localhost:8080/transaction?message=transactionKeeperAddTransactions"

export async function getAllTransaction(): Promise<ITransactionList> {
    let response = await fetch(SERVER_MESSAGE_GET_TRANSACTION_PATH)
    let transactions = await response.json()
    return transactions
}


export async function addTransaction(transaction: ITransaction): Promise<void> {
    let response = await fetch(SERVER_MESSAGE_ADD_TRANSACTION_PATH, {
        body: JSON.stringify(transaction),
        method: "POST"
    })

    console.log(response)
}