import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

export default function signUp() {
  return (
    <Formik
      initialValues={{
        business_Name: "",
        buss_type: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        gst_number: "",
        password: "",
        confirm_password: "",
      }}
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
              <label htmlFor='business_Name' className='form-label'>
                business Name
              </label>
              <Field
                id='business_Name'
                label='business Name'
                type='text'
                name='business_Name'
                className='form-control'
              />
              <ErrorMessage name='business_Name' component='div' />
            </div>
            <div className='form-label-group pt-4 '>
              <label htmlFor='name' className='form-label'>
                Owner Name
              </label>
              <Field id='name' label='name' type='text' name='name' className='form-control' />
              <ErrorMessage name='name' component='div' />
            </div>
            <div className='form-label-group pt-4 mb-3'>
              <label htmlFor='buss_type' className='form-label'>
                Business Type
              </label>
              <Field as='select' name='buss_type' id='buss_type'>
                <option value='red'>Red</option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
              </Field>
              <ErrorMessage name='color' component='div' />
            </div>
            <div className='form-label-group pt-4 mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <div className='form-label-group'>
                <Field id='email' label='email' type='email' name='email' className='form-control' />
                <ErrorMessage name='email' component='div' />
              </div>
            </div>
            <div className='form-label-group pt-4 mb-3'>
              <label htmlFor='phone' className='form-label'>
                Phone Number
              </label>
              <div className='form-label-group'>
                <Field id='phone' label='phone' type='phone' name='phone' className='form-control' />
                <ErrorMessage name='phone' component='div' />
              </div>
            </div>
            <div className='form-label-group pt-4 mb-3'>
              <label htmlFor='address' className='form-label'>
                Address
              </label>
              <div className='form-label-group'>
                <Field as='textarea' id='address' label='address' type='text' name='address' className='form-control' />
                <ErrorMessage name='address' component='div' />
              </div>
            </div>
            <div className='form-label-group pt-4 mb-3'>
              <label htmlFor='gst_number' className='form-label'>
                GST number
              </label>
              <div className='form-label-group'>
                <Field id='gst_number' label='gst_number' type='text' name='gst_number' className='form-control' />
                <ErrorMessage name='Address' component='div' />
              </div>
            </div>
            <div className='form-label-group pt-4 mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <div className='form-label-group'>
                <Field id='password' label='password' type='password' name='password' className='form-control' />
                <ErrorMessage name='password' component='div' />
              </div>
            </div>
            <div className='form-label-group pt-4 mb-3'>
              <label htmlFor='confirm_password' className='form-label'>
                Confirm password
              </label>
              <div className='form-label-group'>
                <Field
                  id='confirm_password'
                  label='confirm_password'
                  type='password'
                  name='confirm_password'
                  className='form-control'
                />
                <ErrorMessage name='confirm_password' component='div' />
              </div>
            </div>
            <button className='btn btn-lg btn-primary btn-block' type='submit' disabled={isSubmitting}>
              Create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
