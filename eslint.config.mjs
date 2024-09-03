import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

/** @type {import('eslint').FlatConfigArray} */
export default [
  js.configs.recommended,
  {
    rules: {
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'always'],
      'no-unused-vars': "off"
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    plugins: {
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      }],
      'import/no-unresolved': 'off',
    },
  },
  {
    plugins: {
      next: nextPlugin,
    },
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
];