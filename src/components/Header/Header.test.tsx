import { render, screen } from "@testing-library/react";
import { Header } from ".";
import { MemoryRouter } from "react-router-dom";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

describe("Header test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render Header text", () => {
    getWrapperComponent(<Header />);

    expect(screen.queryByText(/E-MerchantPay/)).toBeVisible();
  });
});
