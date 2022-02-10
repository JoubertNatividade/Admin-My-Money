
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransaction } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {


    const { transactions } = useTransaction()

    const { deposit, total, withdraw } = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entrada" />
                </header>

                <strong> {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(deposit)} </strong>
            </div>


            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="Entrada" />
                </header>

                <strong> - {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(withdraw)}</strong>

            </div>


            <div className='light-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entrada" />
                </header>

                <strong> {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(total)} </strong>
            </div>
        </Container>
    )
}