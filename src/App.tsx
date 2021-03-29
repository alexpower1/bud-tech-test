import React, { useEffect, useState } from "react";
import { fetchData } from "./services/fetch-data-service";
import { Statement } from "../types";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App: React.FC = () => {
  const [data, setData] = useState<Statement>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBankStatementData = () => {
    setLoading(false);
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBankStatementData();
  }, []);

  return (
    <div>
      {loading && <h1>Loading</h1>}

      {data && (
        <ThemeProvider theme={theme}>
          <div>
            <h1>{data.provider.title}</h1>
            <p>Account Number: {data.provider.account_number}</p>
            <p>Sort Code: {data.provider.sort_code}</p>
            <p>{data.provider.description}</p>
          </div>

          <div>
            <p>
              Balance: {data.balance.currency_iso} {data.balance.amount}
            </p>
          </div>

          {data.transactions.map((transaction) => {
            return (
              <div>
                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
                <p>{transaction.category_title}</p>
                <p>
                  {transaction.amount.currency_iso} {transaction.amount.value}
                </p>
              </div>
            );
          })}
        </ThemeProvider>
      )}

      {error && (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      )}
    </div>
  );
};

export default App;
