import Paragraph from "../elements/Paragraph";
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
    <div>
      <PrimaryHeading>{title} Statement</PrimaryHeading>
      <Paragraph>Account Number: {account_number}</Paragraph>
      <Paragraph>Sort Code: {sort_code}</Paragraph>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default ProviderDetails;
