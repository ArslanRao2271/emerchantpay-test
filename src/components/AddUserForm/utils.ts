export interface TestInputField {
  inputField: string;
  textToFind: string;
}

export const inputFields: Array<TestInputField> = [
  {
    inputField: "Email address",
    textToFind: "Email is required",
  },
  {
    inputField: "First Name",
    textToFind: "First name is required",
  },
  {
    inputField: "Last Name",
    textToFind: "Last name is required",
  },
];

export const emailFieldValidation: Array<string> = ["tester", "tester@foxtons"];

export const nameFieldValidation: Array<string> = ["Ar@", "test*"];
