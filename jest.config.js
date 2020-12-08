const { resolve } = require('path')
const rootDir = resolve(__dirname)

module.exports = {
  rootDir: rootDir,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/jest/**/*.test.js'],
  testEnvironment: 'node',
  clearMocks: true
}
