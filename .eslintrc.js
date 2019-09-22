module.exports = {
  env: {
    browser: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['standard', 'prettier'],
  plugins: ['react'],
  rules: {
    'space-before-function-paren': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'import/prefer-default-export': 'error',
    'import/order': 'error',
    'import/no-duplicates': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'error',
    'react/display-name': 'error',
    'react/jsx-boolean-value': 'error'
  }
}
