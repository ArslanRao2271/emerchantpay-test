import { screen, render, fireEvent } from "@testing-library/react";
import InfoIcon from "@mui/icons-material/Info";
import { Textfield } from "./index";
import React from "react";
import { lightTheme } from "@theme/index";

const { palette } = lightTheme;

const PROPS = {
  label: "Textfield",
  name: "textField",
  placeholder: "unique placeholder",
};

describe("Unit Test cases for TextFields", () => {
  test("should render textfield with passed value prop", () => {
    render(<Textfield {...PROPS} type="text" value="inputVal" />);

    const InputBox = screen.getByDisplayValue("inputVal");

    expect(InputBox).toBeInTheDocument();
  });

  test("should be a mismatch when textfield value-prop is absent", () => {
    render(<Textfield {...PROPS} type="text" />);

    const InputBox = screen.queryByDisplayValue("inputVal");

    expect(InputBox).not.toBeInTheDocument();
  });

  test("renders textfield", () => {
    render(<Textfield {...PROPS} type="text" />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);

    expect(InputBox).not.toBe(null);
  });

  test("password visibility check on click", () => {
    render(<Textfield {...PROPS} type="password" endAdornmentOption />);

    const button = screen.queryByRole("button");
    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);
    let inputType = InputBox?.getAttribute("type");

    expect(inputType).toBe("password");
    fireEvent.click(button);
    inputType = InputBox?.getAttribute("type");
    expect(inputType).toBe("text");
  });

  test("renders textfield with attribute of required", () => {
    render(<Textfield {...PROPS} type="text" required />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);

    expect(InputBox).toBeRequired();
  });

  test("renders textfield when attribute of required is absent", () => {
    render(<Textfield {...PROPS} type="text" required={false} />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);

    expect(InputBox).not.toBeRequired();
  });

  test("renders textfield with attribute of disabled", () => {
    render(<Textfield {...PROPS} type="text" required={false} disabled />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);

    expect(InputBox).toBeDisabled();
  });

  test("renders textfield with attribute of disabled absent", () => {
    render(<Textfield {...PROPS} type="text" required={false} />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);

    expect(InputBox).not.toBeDisabled();
  });

  test("textfield with autocomplete is on", () => {
    render(<Textfield {...PROPS} type="text" autoComplete="on" />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);
    const inputAutoComplete = InputBox?.getAttribute("autocomplete");

    expect(inputAutoComplete).toEqual("on");
  });

  test("textfield with autocomplete is off", () => {
    render(<Textfield {...PROPS} type="text" autoComplete="off" />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);
    const inputAutoComplete = InputBox?.getAttribute("autocomplete");

    expect(inputAutoComplete).toEqual("off");
  });

  test("renders textfield with error state", () => {
    const { container } = render(<Textfield {...PROPS} type="text" error />);

    const InputBox = container.getElementsByClassName("Mui-error");

    expect(InputBox.length).toBeGreaterThan(0);
  });

  test("renders textfield with error state absent", () => {
    const { container } = render(<Textfield {...PROPS} type="text" />);

    const InputBox = container.getElementsByClassName("Mui-error");

    expect(InputBox.length).not.toBeGreaterThan(0);
  });

  test("helperText on textfield", () => {
    render(<Textfield {...PROPS} type="text" message="success" />);

    const helperText = screen.queryByText("success");

    expect(helperText).toBeInTheDocument();
  });

  test("changed helperText on textfield", () => {
    render(<Textfield {...PROPS} type="text" message="fail" />);

    const helperText = screen.queryByText("success");

    expect(helperText).not.toBeInTheDocument();
  });

  test("isSuccess updating color on textfield", () => {
    render(<Textfield {...PROPS} type="text" message="success" isSuccess />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);

    expect(InputBox).toHaveStyle(`color: ${palette.primary.main}`);
  });

  test("in absence of isSuccess success-color should be absent", () => {
    render(<Textfield {...PROPS} type="text" message="success" />);

    const InputBox = screen.queryByPlaceholderText(PROPS.placeholder);

    expect(InputBox).not.toHaveStyle(`color: ${palette.primary.main}`);
  });

  test("startAdornment Options given on textfield", () => {
    const { container } = render(
      <Textfield {...PROPS} type="text" startAdornmentOption />
    );
    const svgIcon = container.querySelector("svg");

    expect(svgIcon).toBeTruthy();
  });

  test("startAdornment Options not given on textfield", () => {
    const { container } = render(<Textfield {...PROPS} type="text" />);

    const svgIcon = container.querySelector("svg");

    expect(svgIcon).not.toBeTruthy();
  });

  test("readonly true will result in variant equal to filled", () => {
    render(<Textfield {...PROPS} type="text" readOnly />);

    const className = screen.getByPlaceholderText(PROPS.placeholder);

    expect(className).toHaveClass("MuiInput-input");
  });

  test("absence of readonly true will result in variant not-equal-to filled", () => {
    render(<Textfield {...PROPS} type="text" />);

    const className = screen.getByPlaceholderText(PROPS.placeholder);

    expect(className).not.toHaveClass("MuiInput-input");
  });

  test("variant is provided as outline", () => {
    const { container } = render(
      <Textfield {...PROPS} type="text" message="success" variant="outlined" />
    );
    const className = container.getElementsByClassName(
      "MuiOutlinedInput-input"
    );

    expect(className).toBeTruthy();
  });

  test("start-adornment turned on: must not display icon", () => {
    const { container } = render(
      <Textfield
        {...PROPS}
        type="text"
        startAdornmentOption
        startInputAdornment="$"
      />
    );
    const svgIcon = container.querySelector("svg");

    expect(svgIcon).not.toBeTruthy();
  });

  test("on type=text and given svg end-adornment: svg expected", () => {
    const { container } = render(
      <Textfield
        {...PROPS}
        type="text"
        endAdornmentOption
        endInputAdornment={<InfoIcon />}
      />
    );
    const svgIcon = container.querySelector("svg");

    expect(svgIcon).toBeTruthy();
  });

  test("on type=text and given svg end-adornment: no svg expected", () => {
    const { container } = render(
      <Textfield {...PROPS} type="text" endAdornmentOption />
    );
    const svgIcon = container.querySelector("svg");

    expect(svgIcon).not.toBeTruthy();
  });

  test("on type=password and given svg end-adornment-option: svg expected", () => {
    const { container } = render(
      <Textfield {...PROPS} type="password" endAdornmentOption />
    );
    const svgIcon = container.querySelector("svg");

    expect(svgIcon).toBeTruthy();
  });

  test("on type=password and given svg end-adornment-option with end-adornment as string: no svg expected", () => {
    const { container } = render(
      <Textfield
        {...PROPS}
        type="password"
        endAdornmentOption
        endInputAdornment="kg"
      />
    );
    const svgIcon = container.querySelector("svg");

    expect(svgIcon).not.toBeTruthy();
  });
});
