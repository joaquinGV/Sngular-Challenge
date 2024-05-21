/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Formulario.css";
import Swal from "sweetalert2";

const Formulario = ({ onCalcular, reset }) => {
  const [numero, setNumero] = useState("");
  const [submitTriggered, setSubmitTriggered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = parseInt(numero, 10);
    console.log(n);
    if (n > 50) {
      // alert("El numero es muy alto, en este ejercicio no esta disponible.");
      Swal.fire("El numero es muy alto, elije uno menor a 50!");
      return;
    }
    if (!isNaN(n)) {
      onCalcular(n);
      setSubmitTriggered(true);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    reset();
    setSubmitTriggered(false);
    setNumero("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Introduce un número:</label>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button type="submit">Calcular</button>
        {submitTriggered && <button onClick={handleReset}>Reset</button>}
      </div>
    </form>
  );
};

export default Formulario;
