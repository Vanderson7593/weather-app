module.exports = {
  root: true,
  extends: [
    'universe',
    'universe/native',
    'universe/shared/typescript-analysis',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  // rules: {
  //   'react-native/no-inline-styles': 'off',
  //   '@typescript-eslint/no-unused-vars': 'warn',
  //   'prettier/prettier': [
  //     'error',
  //     {
  //       singleQuote: true,
  //       bracketSpacing: true,
  //     },
  //   ],
  // },
  // plugins: ['prettier'],
};
