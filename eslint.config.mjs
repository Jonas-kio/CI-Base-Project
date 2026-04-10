import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'coverage/**',
      'node_modules/**',
      'dist/**',
      'src/*.js',
      'src/*.js.map',
      'src/*.d.ts',
      'tests/*.js',
      'tests/*.js.map',
      'tests/*.d.ts',
      'jest.config.cjs'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    }
  },
  tseslint.configs.recommended,
]);
