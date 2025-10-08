import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
    </div>
  );
}

export default App;
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Form handling: Controlled + Formik</h1>
      <RegistrationForm />
      <hr style={{ margin: "2rem 0" }} />
      <FormikForm />
    </div>
  );
}
