/*@typescript-eslint/no-var-requires */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  modulePaths: ["./"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleDirectories: ["node_modules", "/src/utils", "__dirname"],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "@styles/*": "<rootDir>/styles/$1",
    "@public/*": "<rootDir>/public/$1",
    "^uuid$": require.resolve("uuid"),
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);

export {};
