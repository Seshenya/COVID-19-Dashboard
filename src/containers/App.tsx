import React from 'react';
import '../App.css';
import MainContainer from './MainContainer';
import Nav from './Nav';

interface Props { 
}

const App: React.FunctionComponent<Props> = () => {
  return (
    <div className="App">
      <Nav />
      <MainContainer />
    </div>
  );

};

export default App;
