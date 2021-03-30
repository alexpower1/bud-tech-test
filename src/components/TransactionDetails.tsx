import Paragraph from "../elements/Paragraph";
import React from "react";
import { Transaction } from "../../types";

const TransactionDetails: React.FC<Transaction> = ({
  category_title,
  date,
  description,
  id,
  amount,
}) => {
  return (
    <div key={id}>
      <Paragraph>{date}</Paragraph>
      <Paragraph>{description}</Paragraph>
      <Paragraph>{category_title}</Paragraph>
      <Paragraph>
        {amount.currency_iso} {amount.value}
      </Paragraph>
    </div>
  );
};

export default TransactionDetails;
