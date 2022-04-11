import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const schema = Yup.object().shape({
  firstName: Yup.string().required("Required firstName"),
  lastName: Yup.string().required("Required lastName"),
  city: Yup.string().required("Required city"),
  country: Yup.string().required("Required country"),
  phoneNumber: Yup.string().required("Required phone number"),
  email: Yup.string().email("Invalid email").required("Required email"),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Required website"),
});

export const Form1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  const submit = () => {
    navigate("/");
  };

  return state.data
    .filter((item) => item.id === +id)
    .map((item) => (
      <Formik
        key={item.id}
        initialValues={{
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          city: item.city,
          country: item.country,
          phoneNumber: item.phoneNumber,
          email: item.email,
          website: item.website,
        }}
        validationSchema={schema}
        onSubmit={submit}
      >
        {({ errors, touched, values, handleSubmit, handleChange }) => (
          <Form className="form">
            <div className="input_block">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <Field
                className="input"
                id="firstName"
                onChange={handleChange}
                name="firstName"
                value={values.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <div className="error">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="input_block">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <Field
                className="input"
                id="lastName"
                onChange={handleChange}
                name="lastName"
                value={values.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
            </div>
            <div className="input_block">
              <label className="label" htmlFor="city">
                City
              </label>
              <Field
                className="input"
                id="city"
                name="city"
                onChange={handleChange}
                label="First Name"
                value={values.city}
              />
              {errors.city && touched.city ? (
                <div className="error">{errors.city}</div>
              ) : null}
            </div>
            <div className="input_block">
              <label className="label" htmlFor="country">
                Country
              </label>
              <Field
                className="input"
                id="country"
                onChange={handleChange}
                name="country"
                value={values.country}
              />
              {errors.country && touched.country ? (
                <div className="error">{errors.country}</div>
              ) : null}
            </div>
            <div className="input_block">
              <label className="label" htmlFor="number">
                Phone Number
              </label>
              <Field
                className="input"
                id="number"
                onChange={handleChange}
                name="phoneNumber"
                value={values.phoneNumber}
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="error">{errors.phoneNumber}</div>
              ) : null}
            </div>
            <div className="input_block">
              <label className="label" htmlFor="email">
                Email
              </label>
              <Field
                className="input"
                id="email"
                onChange={handleChange}
                name="email"
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
            <div className="input_block">
              <label className="label" htmlFor="website">
                Web Site
              </label>
              <Field
                className="input"
                id="website"
                onChange={handleChange}
                name="website"
                value={values.website}
              />
              {errors.website && touched.website ? (
                <div className="error">{errors.website}</div>
              ) : null}
            </div>
            <button
              onClick={() => handleSubmit()}
              className="button"
              type="submit"
            >
              Go back
            </button>
          </Form>
        )}
      </Formik>
    ));
};