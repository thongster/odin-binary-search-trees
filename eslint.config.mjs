import js from '@eslint/js';
import globals from 'globals';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      prettier: pluginPrettier,
    },
    extends: [js.configs.recommended],
    rules: {
      // Enable Prettier inside ESLint
      'prettier/prettier': 'error',
      // Optional extra style rules
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]);
