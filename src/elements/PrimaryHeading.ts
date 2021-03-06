import styled from "styled-components";

const PrimaryHeading = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.font};
  font-size: 2rem;
  margin-top: 0;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 3rem;
  }
`;

export default PrimaryHeading;
