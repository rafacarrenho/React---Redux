import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Media = ({ min, max }) => {
  return (
    <Card title="Média dos Números" blue>
      <div className="Intervalo">
        <span>Resultado: </span>
        <strong>{(max + min) / 2}</strong>
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
export default connect(mapStateToProps)(Media);
