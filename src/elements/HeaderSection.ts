import styled from "styled-components";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 2rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-direction: row;
  }
`;

export default HeaderSection;
