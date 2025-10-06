//import RegistrationForm from "./components/RegistrationForm";

//function App() {
 // return (
    ///<div>
    //  <RegistrationForm />
    //</div>
 // );
//}

//export default App;
// ✅ New import for Formik
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div>
      {/* ❌ Old component (commented out or removed) */}
      {/* <RegistrationForm /> */}

      {/* ✅ New Formik-based form */}
      <FormikForm />
    </div>
  );
}

export default App;
