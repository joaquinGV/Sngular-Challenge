import { useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import CalculoSerie from "./Functions/CalculoSerie";

function App() {
  const [numero, setNumero] = useState(null);
  const [resultado, setResultado] = useState(null);

  const handleCalcular = (n) => {
    setNumero(n);
    const resultadoCalculo = CalculoSerie(n);
    setResultado(resultadoCalculo);
  };

  const handleReset = () => {
    setNumero(null);
    setResultado(null);
  };

  return (
    <div className="App">
      <div className="img-container">
        <img src="./function_img.webp" alt="Funcion descriptiva" />
      </div>
      <Formulario onCalcular={handleCalcular} reset={handleReset} />
      {numero !== null && (
        <>
          <Resultado resultado={resultado} />
        </>
      )}
    </div>
  );
}

export default App;
