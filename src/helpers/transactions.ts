import { ITransaction } from "../components/transaction";

const transactions: ITransaction[] = [
    {
        Coin: "osmosis",
        Date: new Date(),
        Id: "sctrewtca",
        Value: 16514
    },
    {
        Coin: "atom",
        Date: new Date(),
        Id: "awerawer",
        Value: 123532
    },
    {
        Coin: "zilliqa",
        Date: new Date(),
        Id: "zsdfzsdf",
        Value: 7423
    },
]

export function getAllTransaction(): ITransaction[] {
    return transactions
}

