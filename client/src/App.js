import { useEffect, useState } from "react";
import AppBar from "../src/components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";
import Container from "@mui/material/Container";

function App() {
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
    <div>
      <AppBar />
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
    </div>
  );
}

export default App;
