import React from "react";
import { Container } from "./styles";
import { FaGlassCheers, FaPen } from "react-icons/fa";

export const Form = () => (
  <Container>
    <header>
      <FaGlassCheers size={22} /> Convidados e quantidades
    </header>

    <form>
      <div className="form-group">
        <label htmlFor="adultsAmount">Quantidade de adultos:</label>
        <input type="number" min="0" step="0.01" id="adultsAmount" />
      </div>

      <div className="form-group">
        <label htmlFor="childrenAmount">Quantidade de crianças:</label>
        <input type="number" min="0" step="0.01" id="childrenAmount" />
      </div>

      <div className="form-group">
        <label htmlFor="adultConsumption">Consumo de um adulto (g):</label>
        <input type="number" min="0" step="0.01" id="adultConsumption" />
      </div>

      <div className="form-group form-group-checkbox">
        <label htmlFor="edsonInvited">
          <input type="checkbox" id="edsonInvited" />
          <span>Edson foi convidado?</span>
        </label>
      </div>

      <div className="form-group">
        <button type="submit">
          <FaPen size={15} /> Calcular
        </button>
      </div>
    </form>
  </Container>
);
