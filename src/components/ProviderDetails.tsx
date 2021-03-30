import Paragraph from "../elements/Paragraph";
import { PrimaryCard } from "../elements/Card";
import PrimaryHeading from "../elements/PrimaryHeading";
import { Provider } from "../../types";
import React from "react";

const ProviderDetails: React.FC<Provider> = ({
  account_number,
  description,
  sort_code,
  title,
}) => {
  return (
    <>
      <PrimaryCard>
        <PrimaryHeading>{title} Statement</PrimaryHeading>
        <Paragraph>Account Number: {account_number}</Paragraph>
        <Paragraph>Sort Code: {sort_code}</Paragraph>
        <Paragraph>{description}</Paragraph>
      </PrimaryCard>
    </>
  );
};

export default ProviderDetails;
