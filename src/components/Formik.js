import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";
import { useFormik, FormikProvider, Field } from "formik";
import "../App.css";

function Formik() {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    },
    onSubmit: (values) => {
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          title: formik.values.title,
          price: formik.values.price,
          description: formik.values.description,
          image: formik.values.image,
          category: formik.values.category,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
  });

  console.log(formik.values);
  return (
    <>
      <FormikProvider value={formik}>
        <div>
          <form className="form" onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Name</label>
            <Field name="title" id="title" />

            <label htmlFor="price">Price</label>
            <Field name="price" id="price" />

            <label htmlFor="description">Description</label>
            <Field name="description" id="description" />

            <label htmlFor="category">Category</label>
            <Field name="category" id="category" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <Button
              component={Box}
              mt={1}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </FormikProvider>
    </>
  );
}

export default Formik;
