import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        // simulate API call
        alert("Registration successful!");
        resetForm();
      }}
    >
      <Form className="max-w-md mx-auto p-4 space-y-4">
        <h2 className="text-xl font-bold">Formik Registration Form</h2>

        <div>
          <Field
            name="username"
            placeholder="Username"
            className="border p-2 w-full rounded"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full rounded"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 w-full rounded"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Register with Formik
        </button>
      </Form>
    </Formik>
  );
}