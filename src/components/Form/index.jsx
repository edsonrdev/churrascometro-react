import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FormContext } from "../../contexts/Form";


import { Container } from "./styles";
import { FaGlassCheers, FaPen } from "react-icons/fa";

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

  const handleCalculation = (e) => {
    e.preventDefault();

    const adultsFieldValue = document.querySelector("#adults").value;
    const childsFieldValue = document.querySelector("#childs").value;
    const adultConsumptionFieldValue = document.querySelector("#adultConsumption").value;
    const edsonHasInvitedFieldChecked = document.querySelector("#edsonHasInvited").checked;

    if (!adultsFieldValue || !childsFieldValue || !adultConsumptionFieldValue) {
      setDone(false);
      toast.error("Preencha o formulário!", {
        duration: 3000,
        position: "top-right",
        iconTheme: {
          primary: "var(--brand-2)",
          secondary: '#fff',
        },
        style: {
          fontWeight: 400,
          fontSize: "1.5rem"
        }
      });

      return false;
    }
    
    setAdults(+adultsFieldValue);
    setChilds(+childsFieldValue);
    setAdultConsumption(+adultConsumptionFieldValue);
    setEdsonHasInvited(edsonHasInvitedFieldChecked ? true : false);
    setDone(true);
    
    document.querySelector("#adults").value = "";
    document.querySelector("#childs").value = "";
    document.querySelector("#adultConsumption").value = "";
    document.querySelector("#edsonHasInvited").checked = false;
  }

  return (
    <Container>
    <header>
      <FaGlassCheers size={22} /> Convidados e quantidades
    </header>

    <form onSubmit={handleCalculation} name="formCalculation">
      <div className="form-group">
        <label htmlFor="adults">Quantidade de adultos:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="adults"
          autoFocus
        />
      </div>

      <div className="form-group">
        <label htmlFor="childs">Quantidade de crianças:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="childs"
        />
      </div>

      <div className="form-group">
        <label htmlFor="adultConsumption">Consumo de um adulto (g):</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="adultConsumption"
        />
      </div>

      <div className="form-group form-group-checkbox">
        <label htmlFor="edsonHasInvited">
          <input 
            type="checkbox"
            id="edsonHasInvited"
          />
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
};
