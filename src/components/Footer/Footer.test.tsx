import { render, screen } from "@testing-library/react";
import { Footer } from ".";
import { MemoryRouter } from "react-router-dom";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

describe("Footer test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render footer text", () => {
    getWrapperComponent(<Footer />);

    expect(screen.queryByText(/E-MerchantPay/)).toBeVisible();
  });
});
