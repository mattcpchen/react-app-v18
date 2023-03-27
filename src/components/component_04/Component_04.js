import React from 'react';
import styled from 'styled-components';

/**
 * testing container
 */

const Container = styled.div`
  margin: 20px;
  text-align: center;
  color: blue;
`;

const ContainerContent = styled.div`
  font-size: 12px;
  text-align: center;
`;

const Component_04 = () => {
  return (
    <Container>
      This is COMPONENT 04
      <ContainerContent>
        <li>styled-component</li>
      </ContainerContent>
    </Container>
  );
}

export default Component_04;