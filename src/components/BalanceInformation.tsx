import { Balance } from "../../types";
import Paragraph from "../elements/Paragraph";
import React from "react";
import { SecondaryCard } from "../elements/Card";
import SecondaryHeading from "../elements/SecondaryHeading";

const BalanceInformation: React.FC<Balance> = ({ amount, currency_iso }) => {
  return (
    <SecondaryCard>
      <Paragraph>Balance</Paragraph>
      <SecondaryHeading>
        {currency_iso} {amount.toString()}
      </SecondaryHeading>
    </SecondaryCard>
  );
};

export default BalanceInformation;
