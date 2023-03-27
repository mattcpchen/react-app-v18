import React, { useState } from 'react';
import styled from 'styled-components';
import Component_01 from './components/component_01/Component_01';
import Component_02 from './components/component_02/Component_02';
import Component_03 from './components/component_03/Component_03';
import Component_04 from './components/component_04/Component_04';


const ComponentController = styled.div`
    display: flex;
    align-items: center;
    margin: 20px auto;
    justify-content: space-around;
    width: 300px;
`;
const ComponentHolder = styled.div`
`;

const App = () => {
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(4);
  const [showAll, toggleShowAll] = useState<boolean>(true);
  const handleOnClick = (dir: number) => {
    setDisplayIndex(prevIndex => {
      return (prevIndex + dir + totalCount) % totalCount
    });
  }
  return (
    <>
      <ComponentController>
        <button
          onClick={handleOnClick.bind(this, -1)}
          disabled={showAll}
        >-</button>
        <button onClick={() => { toggleShowAll(state => !state) }}>
          {showAll ? 'Show All' : `COMPONENT ${displayIndex + 1}`}
        </button>
        <button
          onClick={handleOnClick.bind(this, 1)}
          disabled={showAll}
        >+</button>
      </ComponentController>
      <ComponentHolder>
        {(showAll || displayIndex === 0) && <Component_01 />}
        {(showAll || displayIndex === 1) && <Component_02 />}
        {(showAll || displayIndex === 2) && <Component_03 />}
        {(showAll || displayIndex === 3) && <Component_04 />}
      </ComponentHolder>
    </>
  )
};

export default App;