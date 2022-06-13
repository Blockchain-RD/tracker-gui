import { useContext } from "react";
import { useForm } from "react-hook-form";
import transactionContext from "../context/transactions";
import { addTransaction, getAllTransaction } from "../helpers/transactions";
import { ITransaction } from "./transaction";

import './styles.scss'

interface TransactionForm {
    Id: string,
    Date: string,
    Coin: string,
    Value: string
}

export function FormTransaction() { 
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TransactionForm>();
    const [t, setTransactions] = useContext(transactionContext)

    const onSubmit = async (values: TransactionForm) => {
        const date = new Date(values.Date)
        const value = Number.parseFloat(values.Value)

        const transaction: ITransaction = {
            Id: values.Id,
            Date: date.toISOString(),
            Coin: values.Coin,
            Value: value
        }

        await addTransaction(transaction)

        const transactions = await getAllTransaction()
        setTransactions(transactions)
    }

    return (
        <form className="transaction-form" onSubmit={handleSubmit(onSubmit)}>
            <input className="transaction-form--input" placeholder="Id" type="text" {...register("Id")}/>
            <input className="transaction-form--input" placeholder="Coin" type="text" {...register("Coin")}/>
            <input className="transaction-form--input" placeholder="Value" type="number" {...register("Value")}/>
            <input className="transaction-form--input" placeholder="Date" type="date" {...register("Date")}/>

            <button className="transaction-form--button" type="submit">Send</button>
        </form>
    )
}