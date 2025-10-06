import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("Submitting Formik:", values);

          // 🧪 Optional: Replace this with a real API call
          const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });

          const data = await response.json();
          console.log("API Response:", data);

          alert("User registered successfully!");
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-3">
            <div>
              <label className="block mb-1">Username</label>
              <Field name="username" type="text" className="border w-full p-2 rounded" />
              <ErrorMessage name="username" component="p" className="text-red-600 text-sm" />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <Field name="email" type="email" className="border w-full p-2 rounded" />
              <ErrorMessage name="email" component="p" className="text-red-600 text-sm" />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <Field name="password" type="password" className="border w-full p-2 rounded" />
              <ErrorMessage name="password" component="p" className="text-red-600 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}