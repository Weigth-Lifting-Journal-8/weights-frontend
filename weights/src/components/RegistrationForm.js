import React from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { register } from "../actions";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

import Styled from 'styled-components';

const Regis = Styled.div`
  background-position: absolute; top:0; left:0;
  background-color: gray;
  background-image: url("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80");
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

const RegistrationForm = ({ errors, touched }) => {
  return (
    <Regis className="registerform">
     <Form className="form-container"> 
     <Input>
        <div className="field-input">
          <Field
            className="field-input"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div className="field-input">
          <Field
            className="field-input"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div className="field-input">
          <Field
            className="field-input"
            type="email"
            name="email"
            placeholder="Email"
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>

        <div className="input">
          <Field
            className="field-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>

        <button className="login-button" type="submit"> Sign Up! </button>
      
      <NavLink exact to={`/`}>
        <button className="login-button" to="/"  type="submit">
          {" "}
          Login{" "}
        </button>
      </NavLink>
      </Input>
      </Form>
    </Regis>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
  }),

  handleSubmit(values, { resetForm, props }) {
    props.register(values, props.history);
    resetForm();
  }
})(RegistrationForm);

const mapStateToProps = state => {
  return {
    isRegistering: state.register.isRegistering,
    isRegistered: state.register.isRegistered,
    error: state.register.error
  };
};

export default connect(mapStateToProps, { register })(FormikForm);

// formik mapStateToProps
