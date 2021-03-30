import styled from "styled-components";

const TransactionImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  margin-right: 1rem;
`;

export default TransactionImage;
