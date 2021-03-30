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
    <FlexCard key={id}>
      <TransactionImage
        color={Math.floor(Math.random() * 16777215).toString(16)}
      />
      <div>
        <TertiaryHeading>{description}</TertiaryHeading>
        <Paragraph>{category_title}</Paragraph>
        <Paragraph>{date}</Paragraph>
        <Paragraph>
          {amount.currency_iso} {amount.value}
        </Paragraph>
      </div>
    </FlexCard>
  );
};

export default TransactionDetails;
