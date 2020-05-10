import { hoge } from './main';
// const hoge = require('./main.js');

test ("should be 1", () => {
  expect(hoge()).toBe(1);
});
