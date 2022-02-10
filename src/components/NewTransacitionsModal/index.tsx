import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransaction } from '../../hooks/useTransactions';

import { Container, ContentButtons, ButtonRadios } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useTransaction()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('')



    async function handleNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            type,
            category
        })

        setTitle('')
        setAmount(0)
        setCategory("")
        onRequestClose()

    }

    return (


        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Close Form" />

            </button>

            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastro </h2>

                <input
                    type="text"
                    placeholder='Título'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder='Valor'
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />


                <ContentButtons>

                    <ButtonRadios
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        colorActive="green"
                    >
                        Entrada
                        <img src={incomeImg} alt="" />
                    </ButtonRadios>

                    <ButtonRadios
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        colorActive="red"
                    >
                        Saída
                        <img src={outcomeImg} alt="" />
                    </ButtonRadios>

                </ContentButtons>


                <input
                    type="text"
                    placeholder='Categoria'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal >
    )

}