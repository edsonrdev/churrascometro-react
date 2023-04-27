import React from "react";
import { Container } from "./styles";
import { IoInformationCircle } from "react-icons/io5";

export const Notice = () => (
    <Container>
        <h2>
            <IoInformationCircle size={22} /> Informes:
        </h2>

        <ul>
            <li>
                <span>Cada criança</span> consome <span>40%</span> do que consome um adulto.
            </li>
            <li>
                <span>Edson</span> (convidado ilustre) consome <span>150%</span> do que consome um adulto.
            </li>
        </ul>
    </Container>
);