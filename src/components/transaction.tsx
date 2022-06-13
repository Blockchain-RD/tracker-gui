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
        <tr className="transaction">
            <td>{transaction.Coin}</td> 
            <td>{transaction.Value}</td>
            <td>{getCoolDate(transaction.Date)}</td> 
        </tr>
    )
}

export default Transaction