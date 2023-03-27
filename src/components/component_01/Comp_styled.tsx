import React from 'react';
import styled from 'styled-components';

/**
 * styled component
 */

const Container = styled.div`
  margin: 5px;
  text-align: center;
  color: blue;
`;

const ContainerContent = styled.div`
  font-size: 12px;
  text-align: center;
`;

const StyledComponent = () => {
  return (
    <Container>
      Using styled-components
      <ContainerContent>
        <li>styled-components</li>
      </ContainerContent>
    </Container>
  );
}

export default StyledComponent;