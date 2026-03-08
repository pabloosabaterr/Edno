export default {
  clearMocks: true,
  roots: ["<rootDir>/src", "<rootDir>/example"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s"],
  modulePathIgnorePatterns: ["<rootDir>/test/utils"],
  testEnvironment: "node",
  preset: "ts-jest",
};