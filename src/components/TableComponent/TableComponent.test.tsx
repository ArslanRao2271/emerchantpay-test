import { render, screen } from "@testing-library/react";
import { TableComponent } from ".";
import { MemoryRouter } from "react-router-dom";
import { headerData } from "../../pages/AddUser";
import { users } from "../../pages/Users/utils";
import { parseUserData } from "../../pages/AddUser/utils";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

describe("TableComponent test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(
      <TableComponent headerData={[]} rowsData={[]} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  headerData.forEach(({ label }) =>
    test(`Should render label ${label}`, () => {
      getWrapperComponent(
        <TableComponent headerData={headerData} rowsData={[]} />
      );

      expect(screen.queryByText(label)).toBeVisible();
    })
  );

  users.forEach(({ email }) =>
    test(`Should render email ${email}`, () => {
      getWrapperComponent(
        <TableComponent
          headerData={headerData}
          rowsData={parseUserData(users)}
        />
      );

      expect(screen.queryByText(email)).toBeVisible();
    })
  );

  users.forEach(({ firstName }) =>
    test(`Should render firstName ${firstName}`, () => {
      getWrapperComponent(
        <TableComponent
          headerData={headerData}
          rowsData={parseUserData(users)}
        />
      );

      expect(screen.queryByText(firstName)).toBeVisible();
    })
  );
});
