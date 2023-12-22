
import './App.css';
import React from 'react';
import Advice from './components/Advice';
import styled from 'styled-components';

function App() {
  return (
    <PageStyle>
      <MainStyle>

      <HeaderStyle>Advice from me to you..</HeaderStyle>
      <Advice />
      </MainStyle>
    </PageStyle>
  );
}
const PageStyle = styled.div`
background-color:#B8E1FF;
height: 100vh;
max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const MainStyle = styled.header`
  background-color: #E8AEB7;
  width: 50%;
  padding: 2%;
  padding-bottom: 4%;
  border-radius: 10px;
  border: 8px dotted #203B3D;
`;
const HeaderStyle = styled.h1`
  color: #203B3D;

`;

export default App;
