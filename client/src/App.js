import { useEffect, useState } from "react";
import AppBar from "../src/components/AppBar";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

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
      <TransactionForm fetchTransactions={fetchTransactions} />

      <br />
      <section>
        <table>
          <thead>
            <td>Amount</td>
            <td>Description</td>
            <td>Date</td>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
