export interface ITransaction {
    Id: string,
    Date: string,
    Coin: string,
    Value: number
}

function getCoolDate(d: string): string {   
    const date = new Date(d)
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