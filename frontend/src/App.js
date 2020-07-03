import React from 'react';
import './global.css';
import Routes from './routes';

// JSX (JAVASCRIPT XML)
function App() {
  /* const [counter, setCounter] = useState(0);

  //Array [valor, funcaoDeAtualização]

  function increment(){
    setCounter(counter + 1);
    //console.log(counter);
  } */

  return (
   /* <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div> */
    <Routes />


  );
}

export default App;
