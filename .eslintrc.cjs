module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'react', 'import'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-undef': ['error', { typeof: true }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['error'] }],
  },
  globals: {
    module: 'writable',
  },
}
