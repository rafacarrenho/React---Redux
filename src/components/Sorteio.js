import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Sorteio = ({ min, max }) => {
  const sort = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Sorteio dos Números" purple>
      <div>
        <span>Resultado: </span>
        <strong>{sort}</strong>
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

export default connect(mapStateToProps)(Sorteio);
