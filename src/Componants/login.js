import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}>
    {({ isSubmitting }) => (
      <Form className='form-signin  col-4' style={{ margin: "0 auto" }}>
        <div className='mb-4 mt-4 pt-4'>
          <div className='form-label-group'>
            <Field id='email' label='email' type='email' name='email' className='form-control' />
            <ErrorMessage name='email' component='div' />
          </div>
          <div className='form-label-group pt-4 mb-3'>
            <Field id='password' label='password' type='password' name='password' className='form-control' />
            <ErrorMessage name='password' component='div' />
          </div>

          <button className='btn btn-lg btn-primary btn-block' type='submit' disabled={isSubmitting}>
            Sign in
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default Login;
