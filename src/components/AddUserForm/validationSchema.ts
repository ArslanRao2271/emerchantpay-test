import * as yup from "yup";

const containsSpecialChar = (value: string): boolean => {
  const specialCharReg = /[~`!@#$%^&*+=\-[\]\\;,/{}|\\":<>?()._]/g;

  return specialCharReg.test(value);
};

const addUserSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  firstName: yup
    .string()
    .required("First name is required")
    .test("", "", function nameValidation(value) {
      const { createError } = this;

      if (containsSpecialChar(value)) {
        return createError({
          path: "firstName",
          message: "Cannot contain special characters",
        });
      }

      return true;
    }),
  lastName: yup
    .string()
    .required("Last name is required")
    .test("", "", function nameValidation(value) {
      const { createError } = this;

      if (containsSpecialChar(value)) {
        return createError({
          path: "lastName",
          message: "Cannot contain special characters",
        });
      }

      return true;
    }),
});

export default addUserSchema;
