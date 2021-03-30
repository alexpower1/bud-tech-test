import styled from "styled-components";

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.secondaryColor};
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`;

const PrimaryCard = styled(Card)`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 66.66666%;
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

const SecondaryCard = styled(Card)`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 33.33333%;
    margin-bottom: 0;
  }
`;

const FlexCard = styled(Card)`
  display: flex;
`;

export default Card;
export { PrimaryCard, SecondaryCard, FlexCard };
