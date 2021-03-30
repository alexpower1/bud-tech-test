import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  font-family: ${(props) => props.theme.font};
`;

export default Paragraph;
