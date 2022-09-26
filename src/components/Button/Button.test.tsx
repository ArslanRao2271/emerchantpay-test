import { render, screen, fireEvent } from "@testing-library/react";
import AddIcon from "@mui/icons-material/Add";
import { lightTheme } from "@theme/index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles";
import { getBtnStyles, getIcon, iconColor } from "./utility";
import { Button } from ".";

const { palette } = lightTheme;

const colorTest = [
  { color: "", expectation: palette.primary.main },
  { color: "secondary", expectation: palette.secondary.main },
  { color: "red", expectation: palette.primary.main },
  { color: "grey", expectation: palette.grey.main },
];

const VARIANTS = [
  { variant: "primary", color: "primary", expectation: styles.primary },
  { variant: "secondary", color: "primary", expectation: styles.secondary },
  { variant: "tertiary", color: "primary", expectation: styles.tertiary },
  { variant: "tertiary", color: "primary", expectation: styles.tertiary },
  { variant: "text", color: "secondary", expectation: {} },
  { variant: "text", color: "primary", expectation: {} },
  {
    variant: "",
    color: "",
    startIcon: <AddIcon />,
    expectation: styles.secondary,
  },
  {
    variant: "",
    color: "secondary",
    startIcon: <AddIcon />,
    expectation: styles.iconTextInverse,
  },
  {
    variant: "primary",
    color: "secondary",
    expectation: styles.primaryInverse,
  },
  {
    variant: "secondary",
    color: "secondary",
    expectation: styles.secondaryInverse,
  },
  {
    variant: "tertiary",
    color: "secondary",
    expectation: styles.tertiaryInverse,
  },
  { variant: "back", color: "secondary", expectation: styles.back },
];

const START_ICON = [
  {
    startIcon: <HorizontalRuleIcon />,
    color: "primary",
    hover: false,
    variant: "tertiary",
    expect: <HorizontalRuleIcon />,
  },
  {
    startIcon: <ArrowForwardIcon />,
    color: "primary",
    hover: true,
    variant: "tertiary",
    expect: <ArrowForwardIcon />,
  },
  {
    startIcon: <AddIcon />,
    color: "primary",
    hover: false,
    variant: "tertiary",
    expect: <AddIcon />,
  },
  {
    startIcon: <ArrowBackIcon />,
    color: "primary",
    hover: false,
    variant: "back",
    expect: <ArrowBackIcon />,
  },
  {
    startIcon: undefined,
    color: "primary",
    hover: false,
    variant: "text",
    expect: undefined,
  },
];

describe("Button test cases", () => {
  test("test if Button is in document", () => {
    render(
      <Button variant="primary" color="primary" theme="light">
        Hello
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("test if label works", () => {
    const TEXT = "Hello";

    render(<Button variant="primary">{TEXT}</Button>);

    expect(screen.queryAllByText(TEXT).length).toBeTruthy();
  });

  test("variant as children if children not defined", () => {
    const VARIANT_TEXT = "secondary";

    render(<Button variant={VARIANT_TEXT} />);

    expect(screen.queryAllByText(VARIANT_TEXT).length).toBeTruthy();
  });

  test("test if svg is in document if variant=tertiary", () => {
    render(<Button variant="tertiary">hello</Button>);

    const button = screen.getByText("hello");

    fireEvent.mouseOver(button);
    fireEvent.mouseLeave(button);
    expect(button).toContainHTML("</svg>");
  });

  test("test if svg is in document if variant=tertiary", () => {
    render(<Button variant="tertiary">hello</Button>);

    const button = screen.getByText("hello");

    fireEvent.mouseOver(button);
    fireEvent.mouseLeave(button);
    expect(button).toContainHTML("</svg>");
  });

  colorTest.forEach((testCase) => {
    test(`if color = ${testCase.color} given, then return ${testCase.expectation}`, () => {
      const result = iconColor(testCase.color);
      const expected = testCase.expectation;

      expect(result).toEqual(expected);
    });
  });

  VARIANTS.forEach((testCase) => {
    test(`if variant = ${testCase.variant} & color = ${
      testCase.color
    } & startIcon = ${testCase.startIcon} given, then return ${JSON.stringify(
      testCase.expectation
    )}`, () => {
      const result = getBtnStyles(
        testCase.variant,
        testCase.color,
        "light",
        testCase.startIcon
      );
      const expected = testCase.expectation;

      expect(result).toEqual(expected);
    });
  });

  START_ICON.forEach((testCase) => {
    test(`if getIcon with ${JSON.stringify(testCase)} `, () => {
      const result = getIcon(
        testCase.variant,
        testCase.hover,
        testCase.color,
        testCase.startIcon
      );

      expect(result).toEqual(testCase.expect);
    });
  });
});
