// Задаем предзагрузочный файл для jest-тестов

module.exports = {
  verbose: true,
  setupFiles: [`./jest.setup.js`],
  testURL: `http://localhost/`,
  testRegex: `(/tests/.|(.|/)(test|spec)).(jsx?|tsx?)$`,
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  moduleNameMapper: {
    "^@components(.)$": `/src/components$1`,
  }
};
