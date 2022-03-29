import React, { useContext } from "react";
import styled from "styled-components";
import Title from "../../../DesignSystem/Title";
import { Store } from "../../../Store/Store";

const ResultsWrapper = styled.div`
  flex: 1 1 auto;
  padding-top: 48px;
  justify-content: center;
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
`;

const EligibilityResults = () => {

  const { state } = useContext(Store);
  console.log('state', state);
  return (
  <ResultsWrapper>
    {
      state.eligibleCards !== undefined ? state.eligibleCards.map((item: any) => <Title key={item}>{item}</Title>) : null
    }
  </ResultsWrapper>
  );
};

export default EligibilityResults;
