import styled from "styled-components";

const SecondaryHeading = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.font};
  font-size: 1.8rem;
  margin-top: 0;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 2.5rem;
  }
`;

export default SecondaryHeading;
