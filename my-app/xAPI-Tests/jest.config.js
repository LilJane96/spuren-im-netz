require("dotenv").config();

module.exports = {
  rootDir: "./", // Setzt das Root-Verzeichnis auf das Hauptverzeichnis des Projekts
  setupFiles: ["<rootDir>/xAPI-Tests/jest.setup.js"], // Setup-Datei im Tests-Ordner
  testEnvironment: "jsdom", // Simuliert den Browser für React-Tests
  testMatch: ["<rootDir>/tests/**/*.test.js"], // Alle Tests im "tests"-Ordner mit .test.js-Endung
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Falls TypeScript verwendet wird
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Falls Babel genutzt wird
    "^.+\\.svg$": "jest-transform-stub",
  },
  collectCoverage: true, // Aktiviert Coverage-Reports (optional)
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/index.js"], // Welche Dateien getestet werden
  moduleNameMapper: {
    // "\\.svg$": "<rootDir>/__mocks__/fileMock.js", // Erstelle diese Mock-Datei
    "\\.svg$": "jest-transform-stub", // SVG-Dateien mocken
  },
  testTimeout: 10000,
};
