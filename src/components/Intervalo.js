import React from "react";
import Card from "./Card";
import "./Intervalo.css";
import { connect } from "react-redux";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numeros";

const Intervalo = ({ min, max, alterarMinimo, alterarMaximo }) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <label>
          Minimo{" "}
          <input
            type="number"
            value={min}
            max={max}
            min={0}
            onChange={(e) => alterarMinimo(+e.target.value)}
          />
        </label>

        <label>
          Máximo{" "}
          <input
            type="number"
            value={max}
            min={min}
            onChange={(e) => alterarMaximo(+e.target.value)}
          />
        </label>
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

const mapDispatchToProps = (dispatch) => {
  return {
    alterarMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
