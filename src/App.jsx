import React from "react";

import { Header } from "./components/Header";
import { Notice } from "./components/Notice";
import { Form } from "./components/Form";

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Notice />

          <hr />

          <div className="panels">
            <Form />
          </div>
        </div>
      </main>
    </>
  );
}
