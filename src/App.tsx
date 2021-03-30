import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import BalanceInformation from "./components/BalanceInformation";
import Paragraph from "./elements/Paragraph";
import ProviderDetails from "./components/ProviderDetails";
import { Statement } from "../types";
import TransactionDetails from "./components/TransactionDetails";
import Wrapper from "./elements/Wrapper";
import { fetchData } from "./services/fetch-data-service";
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
          <Wrapper>
            <ProviderDetails
              account_number={data.provider.account_number}
              description={data.provider.description}
              sort_code={data.provider.sort_code}
              title={data.provider.title}
            />

            <BalanceInformation
              amount={data.balance.amount}
              currency_iso={data.balance.currency_iso}
            />

            {data.transactions.map((transaction) => {
              return (
                <TransactionDetails
                  category_title={transaction.category_title}
                  date={transaction.date}
                  description={transaction.description}
                  id={transaction.id}
                  amount={transaction.amount}
                />
              );
            })}
          </Wrapper>
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
