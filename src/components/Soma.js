import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Soma = ({ min, max }) => {
  return (
    <Card title="Soma dos Números" green>
      <div className="Intervalo">
        <span>Resultado: </span>
        <strong>{min + max}</strong>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Soma);
