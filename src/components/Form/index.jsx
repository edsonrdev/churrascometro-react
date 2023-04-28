import React, { useContext } from "react";
import { FormContext } from "../../contexts/Form";

import { Container } from "./styles";
import { FaGlassCheers, FaPen } from "react-icons/fa";
import { BsEraserFill } from "react-icons/bs";

export const Form = () => {
  const { 
    adults,
    childs,
    adultConsumption,
    edsonHasInvited,
    
    setAdults,
    setChilds,
    setAdultConsumption,
    setEdsonHasInvited,
    setDone
  } = useContext(FormContext);

  const handleChangeAdults = (e) => {
    setAdults(e.target.value);
  }
  
  const handleCalculation = (e) => {
    e.preventDefault();
    console.log(adults, childs, adultConsumption, edsonHasInvited);
    // console.log("calculating...");
    setDone(true);
  }

  return (
    <Container>
    <header>
      <FaGlassCheers size={22} /> Convidados e quantidades
    </header>

    <form>
      <div className="form-group">
        <label htmlFor="adults">Quantidade de adultos:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="adults"
          defaultValue={adults}
          // onChange={e => setAdults(+e.target.value)}
          onChange={handleChangeAdults}
          autoFocus
        />
      </div>

      <div className="form-group">
        <label htmlFor="children">Quantidade de crianças:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="children"
          defaultValue={childs}
          // onChange={e => setChilds(+e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="adultsConsumption">Consumo de um adulto (g):</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="adultsConsumption"
          defaultValue={adultConsumption}
          // onChange={e => setAdultConsumption(+e.target.value)}
        />
      </div>

      <div className="form-group form-group-checkbox">
        <label htmlFor="edsonHasInvited">
          <input 
            type="checkbox"
            id="edsonHasInvited"
            defaultValue={edsonHasInvited}
            // onChange={e => setEdsonHasInvited(!edsonHasInvited)}
          />
          <span>Edson foi convidado?</span>
        </label>
      </div>

      <div className="form-group">
        <button onClick={handleCalculation}>
          <FaPen size={15} /> Calcular
        </button>
        <button>
          <BsEraserFill size={15} /> Resetar
        </button>
      </div>
    </form>
  </Container>
  );
};
