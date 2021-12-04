import React, { useState } from "react";
import "./Signup.css";
import Validation from "./Validation";

const Signup = ({ submitForm}) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
 

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    
  };


  return (
    <>
      <div className="container1">
        <div className="app-wrapper">
          <div>
            <h2 className="title"> Create Account</h2>
          </div>
          <form className="form-wrapper">
            <div className="name">
              <label className="label">Full Name</label>
              <input
                className="input"
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="errors">{errors.fullname}</p>}
            </div>

            <div className="Email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.Email && <p className="errors">{errors.Email}</p>}
            </div>
            <div className="Password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="errors">{errors.password}</p>}
            </div>
            <div>
              <button
                className="submit"
                onClick={() => {
                  handleFormSubmit();
                }}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
