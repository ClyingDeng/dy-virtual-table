module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true //额外支持新的 ES6 全局变量
  },
  globals: {},
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6 //支持 ES6 语法
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prefer-rest-params': 0,
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore', //指定 HTML 文件的全局空白区域敏感度。空格被认为是不敏感的
        singleQuote: true, //单引号
        semi: false, //语句末尾打印分号。不加
        trailingComma: 'none', //多行时尽可能打印尾随逗号。不尾随
        bracketSpacing: true, //括号之间的空格
        jsxBracketSameLine: true //将 > 多行 JSX 元素放在最后一行的末尾
      }
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-template-shadow': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        // mocha: true
      }
    }
  ]
}
