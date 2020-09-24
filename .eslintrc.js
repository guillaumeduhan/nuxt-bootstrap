module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
<<<<<<< HEAD
  extends: ["eslint:recommended", "plugin:vue/recommended"],
=======
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
>>>>>>> 3cd9bdc... Init
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
<<<<<<< HEAD
    "indent": ["error", 2, { "SwitchCase": 1 }],
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
=======
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { semi: false }],
>>>>>>> 3cd9bdc... Init
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
  },
}
