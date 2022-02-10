import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface TransactionProps {
    id: number
    title: string;
    amount: number;
    type: string;
    category: string;
    created_at: string
}
type NewTransactionProps = Omit<TransactionProps, 'id' | 'created_at'>

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionContextDate {
    transactions: TransactionProps[];
    createTransaction: (transaction: NewTransactionProps) => void
}

export const TransactioinsContext = createContext<TransactionContextDate>({} as TransactionContextDate)


export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: NewTransactionProps) {
        const response = await api.post('/transactions', { ...transactionInput, created_at: new Date() })

        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ]);
    }


    return (
        <TransactioinsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactioinsContext.Provider >
    )
}

export function useTransaction() {
    const context = useContext(TransactioinsContext)

    return context;
}










