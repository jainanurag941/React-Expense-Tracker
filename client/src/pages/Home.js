import React from "react";
import Container from "@mui/material/Container";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import { useEffect, useState } from "react";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction`);
    const { data } = await res.json();
    setTransactions(data);
  }

  return (
    <Container>
      <TransactionForm
        fetchTransactions={fetchTransactions}
        editTransaction={editTransaction}
      />
      <TransactionsList
        transactions={transactions}
        fetchTransactions={fetchTransactions}
        setEditTransaction={setEditTransaction}
      />
    </Container>
  );
}

export default Home;
