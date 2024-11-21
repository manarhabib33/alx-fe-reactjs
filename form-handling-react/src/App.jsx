import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

const App = () => {
  return (
    <div>
      <h1>React Form Handling</h1>
      <h2>Controlled Component</h2>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
};

export default App;
