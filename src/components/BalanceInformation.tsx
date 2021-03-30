import { Balance } from "../../types";
import Paragraph from "../elements/Paragraph";
import React from "react";

const BalanceInformation: React.FC<Balance> = ({ amount, currency_iso }) => {
  return (
    <div>
      <Paragraph>
        Balance: {currency_iso} {amount.toString()}
      </Paragraph>
    </div>
  );
};

export default BalanceInformation;
