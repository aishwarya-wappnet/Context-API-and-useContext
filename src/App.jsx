import React, { createContext, useState  } from 'react'
import reactLogo from './assets/react.svg'
import CompoA from './CompoA';
import UseRef from './UseRef';
import Uncontrolled from './Uncontrolled';
import UseReducer from './UseReducer';
import ComA from './useContext1/ComA';

const FirstName = createContext();
const LastName = createContext();
const Email = createContext();

function App() {
  return (
    <>
    <div className="App">
      <FirstName.Provider value={'React'}>
        <LastName.Provider value={'Js'}>
          <Email.Provider value={'example@example.com'}>
          <CompoA/>
          </Email.Provider>
          </LastName.Provider>
      </FirstName.Provider>
    </div>
    <UseRef/>
    <Uncontrolled/>
    <UseReducer/>
    <ComA/>
    </>
  )
}

export default App;
export { FirstName, LastName, Email };