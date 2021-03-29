import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Statement } from "../types";
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

  const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
  `;

  const PrimaryHeading = styled.h1`
    font-family: ${(props) => props.theme.font};
  `;

  const TextDetail = styled.p`
    font-family: ${(props) => props.theme.font};
  `;

  return (
    <div>
      {loading && <h1>Loading</h1>}

      {data && (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <div>
              <PrimaryHeading>
                Hello, welcome to {data.provider.title}
              </PrimaryHeading>
              <TextDetail>
                Account Number: {data.provider.account_number}
              </TextDetail>
              <TextDetail>Sort Code: {data.provider.sort_code}</TextDetail>
              <TextDetail>{data.provider.description}</TextDetail>
            </div>

            <div>
              <TextDetail>
                Balance: {data.balance.currency_iso} {data.balance.amount}
              </TextDetail>
            </div>

            {data.transactions.map((transaction) => {
              return (
                <div key={transaction.id}>
                  <TextDetail>{transaction.date}</TextDetail>
                  <TextDetail>{transaction.description}</TextDetail>
                  <TextDetail>{transaction.category_title}</TextDetail>
                  <TextDetail>
                    {transaction.amount.currency_iso} {transaction.amount.value}
                  </TextDetail>
                </div>
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
