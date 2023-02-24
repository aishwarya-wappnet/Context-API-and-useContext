import React, { createContext  } from 'react'
import reactLogo from './assets/react.svg'
import CompoA from './CompoA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <div className="App">
      <FirstName.Provider value={'React'}>
        <LastName.Provider value={'Js'}><CompoA/></LastName.Provider>
      </FirstName.Provider>
    </div>
    </>
  )
}

export default App;
export { FirstName, LastName };