import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Form, Field, withFormik } from "formik";

import { NavLink } from "react-router-dom";
import * as Yup from "yup";

// use redux
import { connect } from "react-redux";

// axios post action
import { postLoginData } from "../actions/index.js";

const LoginForm = ({ errors, touched, status }) => {
  const [login, setLogin] = useState({});
  useEffect(() => {
    if (status) {
      setLogin(user => ({ ...login, user }));
    }
  }, [status]);

  return (
    <div className="login-form">
      <Form className="form-container">
        <div className="email-input">
          <Field
            className="field-input"
            name="email"
            type="text"
            placeholder="E-mail"
          />
          {touched.email && <errors className="email"></errors> && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <div className="password-input">
          <Field
            className="field-input"
            name="password"
            type="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <button className="login-button" type="submit">
          LOGIN
        </button>
        <div>
          <div className="bottomlogin" columns={2} relaxed="very">
            <div>
              <NavLink className="login-bottom-links-1" exact to={`/Register`}>
                Create Account
              </NavLink>
            </div>
            <div vertical className="divider">
              |
            </div>
            <div>
              <NavLink
                className="login-bottom-links-2"
                exact
                to={`/emptypage2`}
              >
                Forgot Password
              </NavLink>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      password: password || "",
      email: email || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please Enter Your Email Address"),
    password: Yup.string().required("Please Enter Your Password")
  }),

  handleSubmit(values, { props }) {
    console.log("props", props);
    console.log("values", values);

    props.postLoginData(values, props.history);
  }
})(LoginForm);

const mapStateToProps = state => {
  return {
    loginIsLoading: state.login.loginIsLoading,
    isLoggedIn: state.login.isLoggedIn,
    userId: state.login.userId
  };
};

export default connect(mapStateToProps, { postLoginData })(FormikLoginForm);
