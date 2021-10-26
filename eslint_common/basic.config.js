module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "Espree",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    // TODO:
    // 'plugin:promise/recommended',
  ],
  settings: {
    // TODO:兼容webpack
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    //   // 必须使用全等
    //   'eqeqeq': [2],
    //   // switch 必须有default
    //   'default-case': [2],
    //   // 数组方法必须有return
    //   'array-callback-return': [2],
    //   // 变量必须在块级作用域使用
    //   'block-scoped-var': [2],
    //   // return要么制定值，要么不指定
    //   'consistent-return': [2],
    //   // 禁用arguments caller
    //   'no-caller': [2],
    //   'no-eval': [2],
    //   'no-magic-numbers': [1],
    //   // 禁止多空格
    //   'no-multi-spaces': [2],
    //   // 参数覆盖警告
    //   'no-shadow': [1],
    //   // 非必要的括号警告
    //   'no-extra-parens': [1],
    //   // 允许导出let、var变量
    //   'import/no-mutable-exports': ['off'],
    //   'prefer-const': [1],
    // 非交互元素允许监听事件
    "jsx-a11y/no-noninteractive-element-interactions": [1],
    // 可以单独只添加click事件
    "jsx-a11y/click-events-have-key-events": [1],
    // 允许使用jsx的文件后缀
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    // React17不需要导入React模块
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  plugins: [],
};
