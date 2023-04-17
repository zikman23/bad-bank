import React from 'react';
import { initUserDataOnCreate, loadAllUserData, saveAllUserData } from './Context';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateAccount() {
  const [success, setSuccess] = React.useState(false);
  const [userList, setUserList] = React.useState(() => loadAllUserData());

  //everytime userList changes, save it to LocalStorage
  React.useEffect(() => saveAllUserData(userList), [userList]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      console.log(`Submit Pressed`);

      const user = { id: '2', ...values };
      initUserDataOnCreate(user);
      console.log(user);

      setSuccess(true);
      setUserList((prevNotes) => [user, ...userList]);
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required()
        .min(2, 'Name needs to have at least 2 characters.')
        .max(32, 'Name can be only 32 characters long.'),
      email: Yup.string().required().email('Please provide a valid email address.'),
      password: Yup.string()
        .required('Password is mandatory.')
        .min(8, 'Password needs to have at least 8 characters.')
        .max(32, 'Password can be only 32 characters long.'),
    }),
  });

  //we need to validate form everytime its new, to disable submit button
  // * {brackets} used because useEffect function can return only nothing or another function
  // * reverting useEffect
  React.useEffect(() => {
    formik.validateForm();
  }, [success]);

  const handleAnotherAccount = (e) => {
    e.preventDefault();
    formik.handleReset();
    setSuccess(false);
  };

  return (
    <Card header="Create New Account">
      {!success ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            {formik.touched.name && formik.errors.name && (
              <div className="alert alert-danger py-1 px-3 mb-1" role="alert">
                <small>{formik.errors.name}</small>
              </div>
            )}
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            {formik.touched.email && formik.errors.email && (
              <div className="alert alert-danger py-1 px-3 mb-1" role="alert">
                <small>{formik.errors.email}</small>
              </div>
            )}
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            {formik.touched.password && formik.errors.password && (
              <div className="alert alert-danger py-1 px-3 mb-1" role="alert">
                <small>{formik.errors.password}</small>
              </div>
            )}
            <input
              type="password"
              className="form-control"
              id="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary mt-4"
              disabled={!(Object.keys(formik.errors).length === 0) && 'disabled'}>
              Create Account
            </button>
          </div>
        </form>
      ) : (
        <>
          <Card bgcolor="success" txtcolor="light" header="Success" title="New Account Created">
            <hr />
            <div>
              Name: {formik.values.name} <br />
              Email: {formik.values.email} <br />
              Password: {formik.values.password}
            </div>
          </Card>
          <div className="d-grid gap-2 d-flex justify-content-end">
            <Link to="/deposit/" className="nav-link">
              <button type="button" className="btn btn-primary mt-3 me-md-2">
                Deposit
              </button>
              <button type="submit" className="btn btn-primary mt-3" onClick={handleAnotherAccount}>
                Add Another Account
              </button>
            </Link>
          </div>
        </>
      )}
    </Card>
  );
}
