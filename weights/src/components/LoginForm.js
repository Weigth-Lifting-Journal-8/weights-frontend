import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Form, Field, withFormik } from "formik";

import { NavLink } from "react-router-dom";
import * as Yup from "yup";

// use redux
import { connect } from "react-redux";

// axios post action
import { postLoginData } from "../actions/index.js";
import Styled from 'styled-components';


const LogIn = Styled.div`
  background-position: absolute; top:0; left:0;
  background-color: gray;
  background-image: url("https://images.unsplash.com/photo-1528304270437-714a2d6fbb6b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=juan-pablo-rodriguez-X6jtULYJQz8-unsplash.jpg");
  height: 100vh; width: 100vw;
  background-size: cover; background-repeat: no-repeat;
  display: flex;
`;

const Input = Styled.div`
border: 1px solid black;
min-width: 300px; width: 50vw;
min-height: 400px;
background-color: black;
padding-left: 20px; padding-right: 10px;
opacity: 80%;
display: flex; flex-direction: column;
    justify-content: center;


`

const Fields = Styled.div`
`

const LoginForm = ({ errors, touched, status }) => {
  const [login, setLogin] = useState({});
  useEffect(() => {
    if (status) {
      setLogin(user => ({ ...login, user }));
    }
  }, [status]);

  return (
    <LogIn className="login-form">
      <Form className="form-container">
        <Input>
        <Fields className="email-input">
          <Field
            className="field-input"
            name="email"
            type="text"
            placeholder="E-mail"
          />
          {touched.email && <errors className="email"></errors> && (
            <p className="error">{errors.email}</p>
          )}
        </Fields>
        <Fields className="password-input">
          <Field
            className="field-input"
            name="password"
            type="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </Fields>
        
        <button className="login-button" type="submit">
          LOGIN
        </button>
        <div>
          <div className="bottomlogin" columns={2} relaxed="very">
            <div>
              <NavLink className="login-bottom-links" exact to={`/Register`}>
                Create Account
              </NavLink>
            </div>
            <div className="divider">|</div>
            <div>
              <NavLink
                className="login-bottom-links"
                exact
                to={`/emptypage2`}
              >
                Forgot Password
              </NavLink>
            </div>
          </div>
        </div>
        </Input>
      </Form>
    </LogIn>
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
