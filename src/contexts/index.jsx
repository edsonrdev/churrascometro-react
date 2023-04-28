import React from "react";
import { FormProvider } from "../contexts/Form";

export const Contexts = ({ children }) => (
    <FormProvider>{children}</FormProvider>
);