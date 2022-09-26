module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint-config-prettier",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-prettier",
    "react",
    "react-hooks",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "no-console": "error",
    "import/no-unresolved": "off", // throws error for import path.
    "import/extensions": "off", // typescript does not allow import end with .tsx
    "react/jsx-filename-extension": "off", // throws error JSX not allowed in files with extension '.tsx'
    "react/jsx-props-no-spreading": "off", // this library is extending mui library. we spread remaining props rather than defining each one down
    "react/no-unstable-nested-components": "error",
    "react/no-array-index-key": "error",
    "react/jsx-key": "error",
    "no-nested-ternary": "error",
    "prefer-object-spread": "error",
    "react/no-children-prop": "error",
    "react/function-component-definition": "error",
    "import/no-extraneous-dependencies": "off", // throws error to add libraries in dependencies. This package itself is being used as a library therefore we should put other libraries in devDependencies
    "react-hooks/rules-of-hooks": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "block" },
      { blankLine: "always", prev: "block", next: "*" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
    ],
    "newline-before-return": "error",
    "no-var": "error",
    "newline-after-var": "error",
    "prefer-const": "error",
    "space-before-blocks": "error",
    "no-trailing-spaces": ["error", { ignoreComments: true }],
    "brace-style": "error",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
    describe: true,
    test: true,
    jest: true,
  },
};
