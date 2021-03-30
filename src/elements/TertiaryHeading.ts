import styled from "styled-components";

const TertiaryHeading = styled.h2`
  color: ${(props) => props.theme.secondaryColor};
  font-family: ${(props) => props.theme.font};
  font-size: 1.5rem;
  margin-top: 0;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 2rem;
  }
`;

export default TertiaryHeading;
