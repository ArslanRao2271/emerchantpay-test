// libs
import { useFormik } from "formik";
import React from "react";
import { Box } from "@mui/material";

// src
import addUserSchema from "./validationSchema";
import { Button } from "@components/Button";
import { Textfield } from "@components/TextFields";

// styles
import styles, { formStyles } from "./styles";

export interface UserValues {
  firstName: string;
  lastName: string;
  email: string;
}

export interface LibAddUserFormProps {
  getUserData: (data: UserValues) => void;
}

function LibAddUserForm({ getUserData }: LibAddUserFormProps) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: addUserSchema,
    onSubmit: (values: UserValues) => {
      getUserData(values);
    },
  });

  return (
    <form
      id="Add-user-form"
      onSubmit={formik.handleSubmit}
      noValidate
      style={formStyles}
    >
      <Box sx={styles.formFieldsWrapper}>
        <Textfield
          onBlur={formik.handleBlur}
          fullWidth
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          autoComplete="on"
          sx={styles.formTextField}
        />
        <Textfield
          onBlur={formik.handleBlur}
          fullWidth
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          autoComplete="on"
          sx={styles.formTextField}
        />
        <Textfield
          onBlur={formik.handleBlur}
          fullWidth
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          autoComplete="on"
          sx={styles.formTextField}
        />
      </Box>
      <Button color="primary" variant="primary" type="submit">
        Add User
      </Button>
    </form>
  );
}

export const AddUserForm = React.memo(LibAddUserForm);
