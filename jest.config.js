module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  moduleNameMapper: {
    "@components(.*)$": "<rootDir>/src/components$1",
    "@theme(.*)$": "<rootDir>/src/theme$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json",
    },
  },
};
