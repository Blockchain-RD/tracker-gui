export interface ITransaction {
    Id: string,
    Date: Date,
    Coin: string,
    Value: number
}

function getCoolDate(date: Date): string {   
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

function Transaction(transaction: ITransaction) {
    return (
        <div className="transaction">
            <span>{transaction.Coin}</span> - <span>{transaction.Value}</span> - <span>{getCoolDate(transaction.Date)}</span> 
        </div>
    )
}

export default Transaction