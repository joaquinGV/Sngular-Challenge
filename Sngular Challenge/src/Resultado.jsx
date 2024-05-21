import "./Resultado.css";

// eslint-disable-next-line react/prop-types
const Resultado = ({ resultado }) => {
  return (
    <div className="result-container">
      <h2>Resultado:</h2>
      <p>{resultado}</p>
    </div>
  );
};

export default Resultado;
