import React from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { register } from "../actions";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const RegistrationForm = ({ errors, touched }) => {
  return (
    <div className="registerform">
      <div className="image-div"></div>
      <Form>
        <div className="input">
          <Field
            className="fieldinput"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div className="input">
          <Field
            className="fieldinput"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div className="input">
          <Field
            className="fieldinput"
            type="email"
            name="email"
            placeholder="Email"
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>

        <div className="input">
          <Field
            className="fieldinput"
            type="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit"> Sign Up! </button>
      </Form>
      <NavLink exact to={`/`}>
        <button to="/" className="goback" type="submit">
          {" "}
          Login{" "}
        </button>
      </NavLink>
    </div>
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
