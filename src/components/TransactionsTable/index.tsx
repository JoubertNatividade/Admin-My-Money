import { useTransaction } from "../../hooks/useTransactions"
import { Container } from "./styles"



export function TransactionsTable() {

    const { transactions } = useTransaction()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id} >
                                <td> {transaction.title} </td>
                                <td className={transaction.type}> {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)} </td>
                                <td>{transaction.category} </td>
                                <td> {Intl.DateTimeFormat('pt-BR').format(new Date(transaction.created_at))} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )

}