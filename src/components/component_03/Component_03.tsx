import React, { useState, useTransition } from 'react';
import styled from 'styled-components';

/**
 * React 18 new useTransition hook
 */

const AllComtainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: fit-content;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px;
  background-color: black;
  color: white;
  border-radius: 10px;
`;

const HeaderContent = styled.div`
  font-size: 12px;
  text-align: center;
  margin:10px;
`;


const ImagsHolder = styled.div<{ isInited: boolean }>`
  width: 300px;
  height:  300px;
  height: ${props => props.isInited ? '300px' : '0px'};
  overflow-y: scroll;
  border: 1px solid black;
  border-radius:  10px;
`;

interface ImageType {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string
}

const DisplayImages = (props: { images: ImageType[] }) => {
  const { images } = props;
  var a = [];
  for (var i = 0; i < 10000; ++i) a[i] = i;
  const getIndex = (index: number) => index < 4999 ? index : index - 5000;
  return (
    <>
      {images && a.map((elm, index) => (
        <img src={images[getIndex(index)]?.url}
          alt='LOGO'
          style={{ height: 50, width: 50 }}
          key={index}
        />
      ))}
    </>
  )
}

const Component_03: React.FC = () => {
  const [isInited, setIsInited] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [images, setImages] = useState([])

  const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(err => console.log(err))
  }

  const handleClickToLoad = () => {
    setIsInited(true);
    startTransition(loadData as any);
  }

  return (
    <AllComtainer>
      <Header>
        <div>This is COMPONENT 03</div>
        <HeaderContent>
          <li>React 18 hooks</li>
          <li>Styled-Components with props && type</li>
        </HeaderContent>
        <div>
          <button onClick={handleClickToLoad}>Click to load</button>
        </div>
      </Header>
      <ImagsHolder isInited={isInited}>
        {isPending && <div>Loading .....</div>}
        <div style={{ opacity: isPending ? 0.5 : 1 }}>
          <DisplayImages images={images} />
          {/* This is another Component, whose prop depends on loadData() which is wrapped in startTransition() */}
        </div>
      </ImagsHolder>
    </AllComtainer>
  );
}


export default Component_03;