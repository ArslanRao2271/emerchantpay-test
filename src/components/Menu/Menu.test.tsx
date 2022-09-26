import { render, screen } from "@testing-library/react";
import { MenuList } from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

const menuList = ["Add User", "Users", "404"];

describe("MenuList test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(<MenuList />);

    expect(asFragment()).toMatchSnapshot();
  });

  menuList.forEach((item) =>
    test(`Should not render MenuList item ${item} on first load`, () => {
      getWrapperComponent(<MenuList />);

      expect(screen.queryByText(item)).toBeNull();
    })
  );

  menuList.forEach((item) =>
    test(`Should render MenuList item ${item} on first load`, async () => {
      getWrapperComponent(<MenuList />);

      const menuIcon = screen.getByTestId("menu");

      expect(screen.queryByText(item)).toBeNull();

      userEvent.click(menuIcon);

      expect(await screen.findByText(item)).toBeVisible();
    })
  );
});
