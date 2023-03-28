const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // 别名设置 src下components里组件  <rootDir>/src/components/$1
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // 测试文件 自己写的
  testMatch: ['<rootDir>/tests/unit/*.spec.ts?(x)'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
}
