import { render, screen } from "@testing-library/react";
import { AddUserForm } from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {
  emailFieldValidation,
  inputFields,
  nameFieldValidation,
  TestInputField,
} from "./utils";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

describe("Add User Form test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(
      <AddUserForm getUserData={() => {}} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should not render any of the validation messages when component loads for first time", () => {
    getWrapperComponent(<AddUserForm getUserData={() => {}} />);

    expect(screen.queryByText(/Email is required/)).toBeNull();
    expect(screen.queryByText(/First name is required/)).toBeNull();
    expect(screen.queryByText(/Last name is required/)).toBeNull();
  });

  test("Should render all of the validation messages when someone click on submit without entering any information", async () => {
    getWrapperComponent(<AddUserForm getUserData={() => {}} />);

    expect(screen.queryByText(/Email is required/)).toBeNull();
    expect(screen.queryByText(/First name is required/)).toBeNull();
    expect(screen.queryByText(/Last name is required/)).toBeNull();

    const addUserButton = screen.getByRole("button", {
      name: /Add User/i,
    });

    userEvent.click(addUserButton);

    expect(await screen.findByText("Email is required")).toBeVisible();
    expect(await screen.findByText("First name is required")).toBeVisible();
    expect(await screen.findByText("Last name is required")).toBeVisible();
  });

  inputFields.forEach((item: TestInputField) =>
    test(`Should render error message "${item.textToFind}" if focus on "${item.inputField}" and then focus out`, async () => {
      getWrapperComponent(<AddUserForm getUserData={() => {}} />);

      const inputField = screen.getByPlaceholderText(item.inputField);

      expect(screen.queryByText(item.textToFind)).toBeNull();

      userEvent.click(inputField);
      userEvent.click(document.body);

      expect(await screen.findByText(item.textToFind)).toBeVisible();
    })
  );

  emailFieldValidation.forEach((item: string) =>
    test(`Should show validation message when invalid email "${item}" is provided `, async () => {
      getWrapperComponent(<AddUserForm getUserData={() => {}} />);

      const inputField = screen.getByPlaceholderText("Email address");

      expect(screen.queryByText("Email is required")).toBeNull();

      userEvent.click(inputField);
      userEvent.type(inputField, item);
      userEvent.click(document.body);

      expect(await screen.findByText("Enter a valid email")).toBeVisible();
    })
  );

  nameFieldValidation.forEach((item: string) =>
    test(`Should show validation message when invalid first name "${item}" is provided `, async () => {
      getWrapperComponent(<AddUserForm getUserData={() => {}} />);

      const inputField = screen.getByPlaceholderText("First Name");

      expect(screen.queryByText("First name is required")).toBeNull();

      userEvent.click(inputField);
      userEvent.type(inputField, item);
      userEvent.click(document.body);

      expect(
        await screen.findByText("Cannot contain special characters")
      ).toBeVisible();
    })
  );

  nameFieldValidation.forEach((item: string) =>
    test(`Should show validation message when invalid last name "${item}" is provided `, async () => {
      getWrapperComponent(<AddUserForm getUserData={() => {}} />);

      const inputField = screen.getByPlaceholderText("Last Name");

      expect(screen.queryByText("Last name is required")).toBeNull();

      userEvent.click(inputField);
      userEvent.type(inputField, item);
      userEvent.click(document.body);

      expect(
        await screen.findByText("Cannot contain special characters")
      ).toBeVisible();
    })
  );
});
