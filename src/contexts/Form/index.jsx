import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [adults, setAdults] = useState('');
    const [childs, setChilds] = useState('');
    const [adultConsumption, setAdultConsumption] = useState('');
    const [edsonHasInvited, setEdsonHasInvited] = useState(false);

    const [done, setDone] = useState(false);

    // const handleCalculation = () => {}

    return (
        <FormContext.Provider
            value={{
                adults,
                childs,
                adultConsumption,
                edsonHasInvited,
                done,
                setAdults,
                setChilds,
                setAdultConsumption,
                setEdsonHasInvited,
                setDone
            }}
        >
            {children}
        </FormContext.Provider>
    );
};