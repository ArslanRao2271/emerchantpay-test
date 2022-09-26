import { render, screen } from "@testing-library/react";
import { Alert } from ".";
import { MemoryRouter } from "react-router-dom";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

describe("Alert test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(
      <Alert isOpen message="test" severity="success" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should not render message when isOpen is false", () => {
    getWrapperComponent(
      <Alert isOpen={false} message="test" severity="success" />
    );

    expect(screen.queryByText(/test/)).toBeNull();
  });

  test("Should render message when isOpen is true", () => {
    getWrapperComponent(<Alert isOpen message="test" severity="success" />);

    expect(screen.queryByText(/test/)).toBeVisible();
  });
});
