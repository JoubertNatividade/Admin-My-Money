import { useState } from "react";
import Modal from 'react-modal'

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';
import { NewTransactionsModal } from "./components/NewTransacitionsModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {


  const [isNewModalTransactionsOpen, setIsNewModalTransactionsOpen] = useState(false)

  function handleOpenNewModalTransacions() {
    setIsNewModalTransactionsOpen(true)
  }

  function handleCloseNewModalTransacitions() {
    setIsNewModalTransactionsOpen(false)
  }

  return (
    <TransactionsProvider>

      <Header
        onNewModalTransactions={handleOpenNewModalTransacions}
      />
      <Dashboard />


      <NewTransactionsModal
        isOpen={isNewModalTransactionsOpen}
        onRequestClose={handleCloseNewModalTransacitions}

      />




      <GlobalStyle />
    </TransactionsProvider>
  );
}

