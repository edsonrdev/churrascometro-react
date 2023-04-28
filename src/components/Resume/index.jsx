import React from "react";
import { Container } from "./styles";
import { FaCashRegister } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

export const Resume = () => (
  <Container>
    <header>
      <FaCashRegister size={22} /> Cálculo do consumo
    </header>

    <div className="resume-content">
      <ul>
        <li>
          Qtd. de adultos: <span>10</span>
        </li>
        <li>
          Qtd. de crianças: <span>4</span>
        </li>
        <li>
          Consumo de um adulto: <span>500g</span>
        </li>
        <li>
          Edson foi convidado: <span>Sim</span>
        </li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Consumo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Adultos</td>
            <td>10</td>
            <td>10 x 500 = 5kg</td>
          </tr>
          <tr>
            <td>Crianças</td>
            <td>4</td>
            <td>4 x 0.4 x 500 = 0.8kg</td>
          </tr>
          <tr>
            <td>Edson</td>
            <td>1</td>
            <td>1 x 1.5 x 500 = 0.75kg</td>
          </tr>
        </tbody>
      </table>
    </div>

    <footer>
      <h2>
        <IoInformationCircle size={20} />
        Consumo total de carne:
        <span>6.55kg</span>
      </h2>
    </footer>
  </Container>
);
