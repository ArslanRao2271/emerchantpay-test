import { render, screen } from "@testing-library/react";
import { BasicModal as Modal } from ".";
import { MemoryRouter } from "react-router-dom";
import { Typography } from "@mui/material";

const getWrapperComponent = (comp: JSX.Element) => {
  return render(comp, { wrapper: MemoryRouter });
};

describe("Modal test cases", () => {
  test("Should match previous snapshot", () => {
    const { asFragment } = getWrapperComponent(
      <Modal isOpen content={<Typography>test</Typography>} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should not render content={<Typography>test</Typography>} when isOpen is false", () => {
    getWrapperComponent(
      <Modal isOpen={false} content={<Typography>test</Typography>} />
    );

    expect(screen.queryByText(/test/)).toBeNull();
  });

  test("Should render content={<Typography>test</Typography>} when isOpen is true", () => {
    getWrapperComponent(
      <Modal isOpen content={<Typography>test</Typography>} />
    );

    expect(screen.queryByText(/test/)).toBeVisible();
  });
});
