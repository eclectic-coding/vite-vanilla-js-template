import js from '@eslint/js';

import importXPlugin, {
  configs as importXConfigs
} from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.vite/**',
      '**/build/**',
      '**/.git/**',
      '.eslintignore',
      '.eslintrc.json',
      '*.cjs',
      'postcss.config.js'
    ]
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2023: true,
        node: true
      }
    },
    plugins: {
      'import-x': importXPlugin,
      prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...importXConfigs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'no-console': 'error',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true
        }
      ],
      'import-x/unambiguous': 'off'
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js'],
          path: ['src'],
          moduleDirectory: ['node_modules']
        }
      }
    }
  }
];
