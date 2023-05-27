module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './babel-jest.config.js' }],
  },
};
