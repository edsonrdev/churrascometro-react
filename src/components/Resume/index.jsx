import React, { useContext } from "react";
import { Container, EmptyContainer } from "./styles";
import { FaCashRegister } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { GiBarbecue } from "react-icons/gi";
import { FormContext } from "../../contexts/Form";

export const Resume = () => {
  const {
    adults,
    childs,
    adultConsumption,
    edsonHasInvited,
    done,
  } = useContext(FormContext);

  const adultsConsumption = (adults * adultConsumption) / 1000;
  const childrenConsumption = (childs * 0.4 * adultConsumption) / 1000;
  const edsonConsumption = (adultConsumption * 1.5) / 1000;
  const totalConsumption = (
    adultsConsumption +
    childrenConsumption +
    edsonConsumption
  ).toFixed(2);

  // console.log(adultsConsumption, childrenConsumption, edsonConsumption, totalConsumption);

  return (
    <>
      {done ? (
        <Container>
          <header>
            <FaCashRegister size={22} /> Cálculo do consumo
          </header>

          <div className="resume-content">
            <ul>
              <li>
                Qtd. de adultos: <span>{adults}</span>
              </li>
              <li>
                Qtd. de crianças: <span>{childs}</span>
              </li>
              <li>
                Consumo de um adulto: <span>{adultConsumption}g</span>
              </li>
              <li>
                Edson foi convidado:{" "}
                <span>{edsonHasInvited ? "Sim" : "Não"}</span>
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
                  <td>{adults}</td>
                  <td>
                    {adults} x {adultConsumption} = {adultsConsumption}kg
                  </td>
                </tr>
                <tr>
                  <td>Crianças</td>
                  <td>{childs}</td>
                  <td>
                    {childs} x 0.4 x {adultConsumption} = {childrenConsumption}
                    kg
                  </td>
                </tr>
                <tr>
                  <td>Edson</td>
                  <td>1</td>
                  <td>
                    1 x 1.5 x {adultConsumption} = {edsonConsumption}kg
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <footer>
            <h2>
              <IoInformationCircle size={20} />
              Consumo total de carne:
              <span>{totalConsumption}kg</span>
            </h2>
          </footer>
        </Container>
      ) : (
        <EmptyContainer>
          <h2>
            <GiBarbecue size={30} /> Sem churrasco, no momento...
          </h2>

          <p>Preencha o formulário e terás o seu churras!</p>
        </EmptyContainer>
      )}
    </>
  );
};
