import React from 'react';

import CssComponent from './Comp_css';
import CssModuleComponent from './Comp_module';
import StyledComponent from './Comp_styled';


const Component_01 = () => {
  return (
    <div style={{
      margin: '10px auto',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '10px',
      width: 'fit-content'
    }}>
      This is COMPONENT 01
      <CssComponent />
      <CssModuleComponent />
      <StyledComponent />
    </div>
  );
}

export default Component_01;