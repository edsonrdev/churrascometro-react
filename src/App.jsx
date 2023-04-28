import React from "react";
// import { FormContext } from "./contexts/Form";

import { Header } from "./components/Header";
import { Notice } from "./components/Notice";
import { Form } from "./components/Form";
import { Resume } from "./components/Resume";

export const App = () => {
  // const { done } = useContext(FormContext);

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Notice />

          <hr />

          <div className="panels">
            <Form />
            <Resume />
          </div>
        </div>
      </main>
    </>
  );
};
