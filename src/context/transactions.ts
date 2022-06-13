import React from 'react'
import { ITransactionList } from '../components/visor'

const t: [ITransactionList, React.Dispatch<React.SetStateAction<ITransactionList>>] = [{}, () =>{}]

let transactionContext = React.createContext(t)

export default transactionContext