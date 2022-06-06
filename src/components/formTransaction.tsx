import { useForm } from "react-hook-form";
import { addTransaction } from "../helpers/transactions";
import { ITransaction } from "./transaction";

interface TransactionForm {
    Id: string,
    Date: string,
    Coin: string,
    Value: string
}

async function onSubmit(values: TransactionForm) {
    const date = new Date(values.Date)
    const value = Number.parseFloat(values.Value)

    const transaction: ITransaction = {
        Id: values.Id,
        Date: date.toISOString(),
        Coin: values.Coin,
        Value: value
    }

    console.log("before: ", transaction)

    await addTransaction(transaction)
}



export function FormTransaction() { 
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TransactionForm>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Id" type="text" {...register("Id")}/>
            <input placeholder="Coin" type="text" {...register("Coin")}/>
            <input placeholder="Value" type="number" {...register("Value")}/>
            <input placeholder="Date" type="date" {...register("Date")}/>

            <button type="submit">Send</button>
        </form>
    )
}