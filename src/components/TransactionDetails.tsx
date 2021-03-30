import { FlexCard } from "../elements/Card";
import Paragraph from "../elements/Paragraph";
import React from "react";
import TertiaryHeading from "../elements/TertiaryHeading";
import { Transaction } from "../../types";
import TransactionImage from "../elements/TransactionImage";

const TransactionDetails: React.FC<Transaction> = ({
  category_title,
  date,
  description,
  id,
  amount,
}) => {
  return (
    <FlexCard>
      <TransactionImage
        color={Math.floor(Math.random() * 16777215).toString(16)}
      />
      <div>
        <TertiaryHeading>{description}</TertiaryHeading>
        <Paragraph>Category: {category_title}</Paragraph>
        <Paragraph>Date: {date}</Paragraph>
        <Paragraph>
          {amount.currency_iso}{" "}
          <span data-testid="transaction-value">{amount.value}</span>
        </Paragraph>
      </div>
    </FlexCard>
  );
};

export default TransactionDetails;
