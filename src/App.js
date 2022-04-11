import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import freecodecamp from './imagenes/freecodecamp.png';
import { useState } from 'react';



function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
        <div className='freeCodeCamp-logo-contenedor'>
                <img 
                className='freeCodeCamp-logo'
                src={freecodecamp}
                alt='Logo de FreeCodeCamp'
                />

        </div>
        <div className="contenedor-principal">
              <Contador numClics={numClics} />
              <Boton 
                texto="Click"
                esBotonDeClick={true}
                manejarClick={manejarClic} />
              <Boton  
                texto="Reiniciar"
                esBotonDeClick={false}
                manejarClick={reiniciarContador} />

        </div>
    </div>
  );
}

export default App;
