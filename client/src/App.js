// import { useEffect, useState } from 'react';
import './App.css';
import Intro from './components/intro/Intro';

function App() {

  // const [backendData, setBackendData] = useState();

  // useEffect( () => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <div className="App">
      <Intro />
 
    </div>
  );
}

export default App;
