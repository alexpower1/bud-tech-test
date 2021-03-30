import React, { useEffect, useState } from "react";

import BalanceInformation from "./components/BalanceInformation";
import Container from "./elements/Container";
import HeaderSection from "./elements/HeaderSection";
import Paragraph from "./elements/Paragraph";
import PrimaryHeading from "./elements/PrimaryHeading";
import ProviderDetails from "./components/ProviderDetails";
import SecondaryHeading from "./elements/SecondaryHeading";
import { Statement } from "../types";
import { ThemeProvider } from "styled-components";
import TransactionDetails from "./components/TransactionDetails";
import Wrapper from "./elements/Wrapper";
import { fetchStatement } from "./services/statementService";
import theme from "./theme";

const App: React.FC = () => {
  const [data, setData] = useState<Statement>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBankStatementData = () => {
    setLoading(false);
    fetchStatement()
      .then((data) => {
        data.transactions.sort((a, b) =>
          a.amount.value < b.amount.value ? 1 : -1
        );

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
    <Wrapper>
      {loading && <h1>Loading</h1>}

      {data && (
        <ThemeProvider theme={theme}>
          <Container>
            <HeaderSection>
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
            </HeaderSection>

            <SecondaryHeading>Transactions</SecondaryHeading>

            {data.transactions.length === 0 ?? (
              <Paragraph>No transactions found</Paragraph>
            )}

            {data.transactions.slice(0, 10).map((transaction) => {
              return (
                <TransactionDetails
                  key={transaction.id}
                  category_title={transaction.category_title}
                  date={transaction.date}
                  description={transaction.description}
                  id={transaction.id}
                  amount={transaction.amount}
                />
              );
            })}
          </Container>
        </ThemeProvider>
      )}

      {error && (
        <>
          <PrimaryHeading>Oops, something went wrong</PrimaryHeading>
          <Paragraph>{error}</Paragraph>
        </>
      )}
    </Wrapper>
  );
};

export default App;
