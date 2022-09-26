import { render, screen } from "@testing-library/react";
import { PageNotFound } from ".";
import { MemoryRouter } from "react-router-dom";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

describe("404 Page test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(<PageNotFound />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render 404 page", () => {
    getWrapperComponent(<PageNotFound />);

    expect(screen.queryByText(/Page not found!/)).toBeVisible();
  });

  test("Should have home button", () => {
    getWrapperComponent(<PageNotFound />);

    expect(screen.queryByText(/Home/)).toBeVisible();
  });
});
